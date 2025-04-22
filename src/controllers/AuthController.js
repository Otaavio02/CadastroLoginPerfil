const User = require('../models/User');
const bcryptUtils = require('../utils/bcryptUtils');
const jwt = require('jsonwebtoken');

const jwtSecret = '12345';
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email_cliente: email } }); 

        if (!user) {
            return res.status(401).json({ message: 'Senha ou email inválidos.' });
        }

        const passwordMatch = await bcryptUtils.comparePassword(password, user.senha_cliente); 

        if (passwordMatch) {
            const token = jwt.sign({ userId: user.id_cliente }, jwtSecret, { expiresIn: '1h' }); 
            return res.status(200).json({ message: 'Login realizado com sucesso!', token });
        } else {
            return res.status(401).json({ message: 'Senha ou email inválidos.' });
        }
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        res.status(500).json({ error: 'Erro ao realizar login.' });
    }
}

module.exports = { login };