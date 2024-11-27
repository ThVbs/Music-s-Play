document.addEventListener("DOMContentLoaded", function() {
    // Obtém os elementos do formulário
    const form = document.querySelector('form');
    const cancelarButton = document.querySelector('#botaoBranco');
    
    // Validação simples para garantir que as senhas e emails coincidam
    form.addEventListener('submit', function(event) {
        const senha = form.querySelector('[name="senha"]').value;
        const confirmarSenha = form.querySelector('[name="confirmar_senha"]').value;
        const email = form.querySelector('[name="email"]').value;
        const confirmarEmail = form.querySelector('[name="confirmar_email"]').value;

        // Verifica se as senhas são iguais
        if (senha !== confirmarSenha) {
            event.preventDefault(); // Impede o envio do formulário
            alert('As senhas não são as mesmas!');
            return;  // Sai da função e não envia o formulário
        }

        // Verifica se os e-mails são iguais
        if (email !== confirmarEmail) {
            event.preventDefault(); // Impede o envio do formulário
            alert('Os e-mails não são as mesmas!');
            return;  // Sai da função e não envia o formulário
        }

        // Se os dados estiverem corretos, podemos redirecionar para login ou outra página após o envio
        // Se não precisar fazer mais redirecionamento aqui, o formulário é enviado normalmente
    });

    // Evento para o botão "Cancelar" (navega para a página de login)
    cancelarButton.addEventListener('click', function() {
        window.location.href = '/Musics_Play/HTML/login.html';
    });
});
