const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');

const app = express();

mongoose.connect('mongodb+srv://test:mh3tAGzrxpLhd25Y@cluster0.3gqye.mongodb.net/stuff?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true})
  .then(() => console.log('Connexion a MongoDB reussie !'))
  .catch(() => console.log('Connexion a MongoDB echouee !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);

module.exports = app;