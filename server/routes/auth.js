const express = require('express');
const router = express.Router();
const connection = require('../db');
const bcrypt = require('bcrypt');

// Rota para validar o login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Verificar se o email e a senha foram fornecidos
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  // Consultar o usuário pelo email
  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Verificar se o usuário existe
    if (results.length === 0) {
      return res.status(401).json({ message: 'Email ou senha inválidos' });
    }

    const user = results[0];

    // Comparar a senha fornecida com a senha armazenada
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).send(err);
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Email ou senha inválidos' });
      }

      // Se a senha corresponder, retornar sucesso com dados do usuário
      res.json({ message: 'Login bem-sucedido', user: { id: user.id, email: user.email } });
    });
  });
});

module.exports = router;
