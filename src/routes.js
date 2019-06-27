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
routes.get('/funcionarios', controllers.FuncionarioController.index);
routes.get('/funcionarios/:id', controllers.FuncionarioController.show);
routes.post('/funcionarios', controllers.FuncionarioController.store);
routes.put('/funcionarios/:id', controllers.FuncionarioController.update);
routes.delete('/funcionarios/:id', controllers.FuncionarioController.destroy);
/**
 *  Encarregado
 */

routes.get('/encarregados', controllers.EncarregadoController.index);
routes.get('/encarregados/:id', controllers.EncarregadoController.show);
routes.post('/encarregados', controllers.EncarregadoController.store);
routes.put('/encarregados/:id', controllers.EncarregadoController.update);
routes.delete('/encarregados/:id', controllers.EncarregadoController.destroy);

routes.get('/teste', authMiddleware, (req, resp) => resp.json({ ok: true }));

module.exports = routes;