// server/index.js
require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware para parsear o corpo das requisições
app.use(express.json());

// Importar rotas
const authRoutes = require('./routes/auth');

// Usar rotas
app.use('/api/auth', authRoutes); // Nova rota de autenticação

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
