const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
