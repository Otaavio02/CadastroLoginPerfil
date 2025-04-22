document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        loginError.style.display = 'none';

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('authToken', data.token);
                window.location.href = '/profile';
            } else {
                loginError.textContent = data.message || 'Erro ao fazer login.';
                loginError.style.display = 'block';
            }
        } catch (error) {
            loginError.textContent = 'Erro de conexão.';
            loginError.style.display = 'block';
        }
    });
});