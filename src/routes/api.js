const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const RestaurantController = require('../controllers/RestaurantController');
const AuthController = require('../controllers/AuthController');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User'); 

router.post('/clientes/register', UserController.registerUser); 
router.post('/restaurantes/register', RestaurantController.registerRestaurant); 
router.post('/login', AuthController.login);

router.get('/clientes/:id', authMiddleware, UserController.getUserById); 

router.get('/profile', authMiddleware, async (req, res) => {
    try {
        const user = await User.findByPk(req.userId, {
            attributes: ['id_cliente', 'nome_cliente', 'email_cliente'] 
        });

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Erro ao buscar perfil:', error);
        res.status(500).json({ error: 'Erro ao buscar perfil.' });
    }
});

module.exports = router;