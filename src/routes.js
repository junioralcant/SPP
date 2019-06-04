const express = require('express');

const routes = express.Router();

const authMiddleware = require('./app/middleware/auth');

const controllers = require('./app/controllers');

/**
 * User
 */

/**
 * Session
 */

 routes.post('/sessions', controllers.SessionController.store);

 routes.use(authMiddleware);

 /**
  * User
  */
 routes.get('/users', controllers.UserController.index);
 routes.get('/users/:id', controllers.UserController.show);
 routes.post('/users', controllers.UserController.store);
 routes.put('/users/:id', controllers.UserController.update);
 routes.delete('/users/:id', controllers.UserController.destroy);



/*
*   Funcionario
 */
routes.post('/funcionarios', controllers.FuncionarioController.store);

routes.get('/teste', authMiddleware, (req, resp) => resp.json({ ok: true }));

module.exports = routes;