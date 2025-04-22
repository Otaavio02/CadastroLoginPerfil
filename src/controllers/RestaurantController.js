const Restaurant = require('../models/Restaurant');

async function registerRestaurant(req, res) {
    try {
        const { nome_restaurante, telefone_restaurante, endereco_restaurante } = req.body; 
        const restaurant = await Restaurant.create({
            nome_restaurante, 
            telefone_restaurante, 
            endereco_restaurante 
        });
        res.status(201).json({
            message: 'Restaurante registrado com sucesso!',
            restaurant: {
                id_restaurante: restaurant.id_restaurante, 
                nome_restaurante: restaurant.nome_restaurante, 
                telefone_restaurante: restaurant.telefone_restaurante, 
                endereco_restaurante: restaurant.endereco_restaurante 
            }
        });
    } catch (error) {
        console.error('Erro ao registrar restaurante:', error);
        res.status(500).json({ error: 'Erro ao registrar restaurante.' });
    }
}

module.exports = { registerRestaurant };