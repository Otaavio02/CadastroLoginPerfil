
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRoutes = require('./routes/api');
const sequelize = require('./database/database');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register/user', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register_user.html'));
});

app.get('/register/restaurant', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register_restaurant.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});


app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Aplicacao rodando em http://localhost:${port}`);
});
