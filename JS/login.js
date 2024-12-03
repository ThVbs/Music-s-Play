document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recupera os dados inseridos no login
    const email = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Recupera a lista de usuários cadastrados do localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se o usuário existe
    const usuario = usuarios.find(usuario => usuario.email === email);

    if (!usuario) {
        alert("Usuário não encontrado.");
        return;
    }

    // Verifica se a senha está correta
    if (usuario.senha === senha) {
        alert("Login bem-sucedido!");
        window.location.href = "/Musics_Play/HTML/home.html"; // Redireciona para a página inicial
    } else {
        alert("Senha incorreta!");
    }
});