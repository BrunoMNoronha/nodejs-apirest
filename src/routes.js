const express = require('express');
const routes = express.Router();

const AuthenticateController = require('./controllers/AuthenticateController');
const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

routes.post('/authenticate', AuthenticateController.index);

module.exports = routes;