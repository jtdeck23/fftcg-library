const express = require('express');
const hbs = require('hbs');

const routes = require('./routes/routes').default;
const app = express();

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
routes(app);

module.exports = app;