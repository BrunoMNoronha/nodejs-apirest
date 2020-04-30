const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

// iniciando o App
const app = express();

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
{ useUnifiedTopology: true , useNewUrlParser: true });

// Injetando models
requireDir('./src/models');

// Primeira rota, redirecionando rotas
app.use('/api', require('./src/routes'))

app.listen(3001);