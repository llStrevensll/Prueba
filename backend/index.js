//Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//Inicializar variables
var app = express();

//

//Body Parser
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors({ origin: 'http://localhost:4200' }));

//Importar Rutas
var appRoutes = require('./routes/app');
var horasExtras = require('./routes/horasExtras');

//Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/pruebaDB', (err, res) => {

    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

})

//Rutas
app.use('/', appRoutes);
app.use('/horasExtras', horasExtras);


//Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});