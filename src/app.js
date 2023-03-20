const express = require('express');
const routes = require('./routes') // importando módulo de rotas

const app = express(); // instância do express

app.use(express.json()); // padrão de comunicação como json
app.use(routes);

module.exports = app; // exportação do módulo