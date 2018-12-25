const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fftcg');

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

hbs.registerPartials(__dirname + '/views/partials');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
routes(app);

module.exports = app;