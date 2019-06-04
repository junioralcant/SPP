const express = require('express');

const routes = express.Router();

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const FuncionarioController = require('./app/controllers/FuncionarioController');

/**
 * User
 */
routes.post('/users', UserController.store);

/**
 * Session
 */

 routes.post('/sessions', SessionController.store);

/*
*   Funcionario
 */
routes.post('/funcionarios', FuncionarioController.store);

module.exports = routes;