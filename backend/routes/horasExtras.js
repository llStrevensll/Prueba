//require
var express = require('express');

var app = express();
//controller
var horasExtrasControler = require('../controller/horasExtrasController');

//model
var HorasExtras = require('../models/horasExtras');

// Get
app.get('/', horasExtrasControler.getHoras);

//Post - Crear
app.post('/', horasExtrasControler.crearHoras);


// Put

// Delete

module.exports = app;