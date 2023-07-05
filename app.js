const express = require('express');
const routes = require('./routes/index');
const anatomiaRoutes = require('./routes/anatomia');
const path = require('path');
const layouts = require('express-ejs-layouts');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(layouts);

app.use('/', routes, anatomiaRoutes);

module.exports = app;