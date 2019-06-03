const express = require('express');

const routes = express.Router();

const FuncionarioController = require('./app/controllers/FuncionarioController');

routes.post('/funcionarios', FuncionarioController.store);

module.exports = routes;