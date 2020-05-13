const express = require('express');
const routes = express.Router();

const authMiddleware = require('./middlewares/auth')
const AuthenticateController = require('./controllers/AuthenticateController');
const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/authenticate', AuthenticateController.index);

routes.use(authMiddleware);

routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

module.exports = routes;