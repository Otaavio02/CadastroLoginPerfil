document.addEventListener('DOMContentLoaded', () => {
    const registerRestaurantForm = document.getElementById('registerRestaurantForm');
    const registerRestaurantError = document.getElementById('registerRestaurantError');
    const registerRestaurantSuccess = document.getElementById('registerRestaurantSuccess');

    if (registerRestaurantForm) {
        registerRestaurantForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const nome_restaurante = document.getElementById('name').value; 
            const telefone_restaurante = document.getElementById('phone').value; 
            const endereco_restaurante = document.getElementById('address').value; 
            registerRestaurantError.style.display = 'none';
            registerRestaurantSuccess.style.display = 'none';

            try {
                const response = await fetch('/api/restaurantes/register', { 
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nome_restaurante, telefone_restaurante, endereco_restaurante }) 
                });

                const data = await response.json();

                if (response.ok) {
                    registerRestaurantSuccess.textContent = data.message || 'Restaurante cadastrado com sucesso!';
                    registerRestaurantSuccess.style.display = 'block';
                    registerRestaurantForm.reset();
                } else {
                    registerRestaurantError.textContent = data.error || 'Erro ao cadastrar restaurante.';
                    registerRestaurantError.style.display = 'block';
                }
            } catch (error) {
                registerRestaurantError.textContent = 'Erro de conexão.';
                registerRestaurantError.style.display = 'block';
            }
        });
    } else {
        console.error("O formulário de registro de restaurante não foi encontrado!");
    }
});