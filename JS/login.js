document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Enviar uma requisição POST para o backend
    const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();

    if (response.ok) {
        alert('Login bem-sucedido!');
        localStorage.setItem('token', result.token); // Armazenar o token
        window.location.href = '/home'; // Redirecionar para a página inicial
    } else {
        alert(result.message);
    }
});