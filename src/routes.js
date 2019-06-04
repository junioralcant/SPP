const express = require('express');

const routes = express.Router();

const authMiddleware = require('./app/middleware/auth');

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

routes.get('/teste', authMiddleware, (req, resp) => resp.json({ ok: true }));

module.exports = routes;