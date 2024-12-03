
function cadastrar() {
    // Recupera os dados dos campos de input
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const confirmarEmail = document.getElementById('confirmarEmail').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    // Validação de campos obrigatórios
    if (!nome || !sobrenome || !dataNascimento || !cpf || !email || !confirmarEmail || !senha || !confirmarSenha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação de e-mails iguais
    if (email !== confirmarEmail) {
        alert("Os e-mails não coincidem.");
        return;
    }

    // Validação de senhas iguais
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    // Validação de CPF (apenas para garantir que tem 11 dígitos)
    if (!/^\d{11}$/.test(cpf)) {
        alert("CPF inválido. Deve conter 11 dígitos.");
        return;
    }

    // Verifica se o email já está cadastrado
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExistente = usuarios.find(usuario => usuario.email === email);

    if (usuarioExistente) {
        alert("Este e-mail já está cadastrado.");
        return;
    }

    // Cria um objeto para armazenar o novo usuário
    const novoUsuario = {
        nome: nome,
        sobrenome: sobrenome,
        dataNascimento: dataNascimento,
        cpf: cpf,
        email: email,
        senha: senha
    };

    // Adiciona o novo usuário ao array de usuários
    usuarios.push(novoUsuario);

    // Salva a lista de usuários no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Exibe uma mensagem de sucesso e redireciona para a página de login
    alert("Cadastro realizado com sucesso!");
    window.location.href = '/Musics_Play/HTML/login.html';
}
