// public/js/register_user.js
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        const registerError = document.getElementById('registerError');
        const registerSuccess = document.getElementById('registerSuccess');
        registerForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const nome_cliente = document.getElementById('name').value; 
            const email_cliente = document.getElementById('email').value; 
            const senha_cliente = document.getElementById('password').value; 
            registerError.style.display = 'none';
            registerSuccess.style.display = 'none';

            try {
                const response = await fetch('/api/clientes/register', { 
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nome_cliente, email_cliente, senha_cliente }) 
                });

                const data = await response.json();

                if (response.ok) {
                    registerSuccess.textContent = data.message || 'Usuário cadastrado com sucesso!';
                    registerSuccess.style.display = 'block';
                    registerForm.reset();
                    window.location.href = '/login';
                } else {
                    registerError.textContent = data.error || 'Erro ao cadastrar usuário.';
                    registerError.style.display = 'block';
                }
            } catch (error) {
                registerError.textContent = 'Erro de conexão.';
                registerError.style.display = 'block';
            }
        });
    }
});