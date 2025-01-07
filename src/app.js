const express = require('express');
const cors = require('cors');
const currencyRoutes = require('./routes/currencyRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/currency', currencyRoutes);

module.exports = app;
