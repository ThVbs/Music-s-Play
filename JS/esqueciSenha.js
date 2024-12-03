function salvarNovaSenha() {
    const novaSenha = document.getElementById("novaSenha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    // Verifica se as senhas coincidem
    if (novaSenha !== confirmarSenha) {
        alert("As senhas não coincidem! Por favor, digite novamente.");
        return;
    }

    // Armazenar a nova senha no sessionStorage
    sessionStorage.setItem('senha', novaSenha);

    alert("Senha alterada com sucesso!");

    // Redireciona para a tela de login
    window.location.href = "";
}