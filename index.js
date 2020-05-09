const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
require('dotenv').config();

// iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// iniciando o DB
mongoose.connect(process.env.MONGO_URL,
{ useUnifiedTopology: true , useNewUrlParser: true });

// Injetando models
requireDir('./src/models');

// Primeira rota, redirecionando rotas
app.use('/api', require('./src/routes'))

app.listen(process.env.PORT || 3001);