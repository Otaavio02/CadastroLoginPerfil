document.addEventListener('DOMContentLoaded', () => {
    const userNameSpan = document.getElementById('user-name');
    const userEmailSpan = document.getElementById('user-email');
    const logoutButton = document.getElementById('logout-button');
    const userIdSpan = document.getElementById('user-id'); // Adicionado

    async function fetchUserProfile() {
        const token = localStorage.getItem('authToken');

        if (!token) {
            window.location.href = '/login';
            return;
        }

        try {
            const response = await fetch('/api/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                userIdSpan.textContent = data.id_cliente; // Usar o novo nome da propriedade
                userNameSpan.textContent = data.nome_cliente; // Usar o novo nome da propriedade
                userEmailSpan.textContent = data.email_cliente; // Usar o novo nome da propriedade

            } else {
                window.location.href = '/login';
            }
        } catch (error) {
            console.error('Erro ao buscar perfil:', error);
            window.location.href = '/login';
        }
    }

    fetchUserProfile();

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('authToken');
            window.location.href = '/login';
        });
    }
});