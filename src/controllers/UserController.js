const User = require('../models/User');
const bcryptUtils = require('../utils/bcryptUtils');

async function registerUser(req, res) {
    try {
        const { nome_cliente, email_cliente, senha_cliente } = req.body; 
        const hashedPassword = await bcryptUtils.hashPassword(senha_cliente); 
        const user = await User.create({
            nome_cliente, 
            email_cliente, 
            senha_cliente: hashedPassword 
        });
        res.status(201).json({
            message: 'Usuário registrado com sucesso!',
            user: { id_cliente: user.id_cliente, nome_cliente: user.nome_cliente, email_cliente: user.email_cliente } 
        });
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(500).json({ error: 'Erro ao registrar usuário.' });
    }
}

async function getUserById(req, res) {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado.' });
        }
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ error: 'Erro ao buscar usuário.' });
    }
}

module.exports = { registerUser, getUserById };