var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var horasExtrasSchema = new Schema({
    documento: { type: Number, unique: true, required: [true, 'El documento es necesario'] },
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    apellido: { type: String, required: [true, 'El apellido es necesario'] },
    fechaInicio: { type: String, required: [true, 'La fecha es necesaria'] },
    fechaFin: { type: String, required: [true, 'La fecha es necesaria'] },
    horarioTurnoInicio: { type: String, required: [true, 'La hora es necesaria'] },
    horarioTurnoFin: { type: String, required: [true, 'La hora es necesaria'] },
    horarioInicioExtra: { type: String, required: [true, 'La hora es necesaria'] },
    horarioInicioFin: { type: String, required: [true, 'La hora es necesaria'] },
    motivo: { type: String, required: [true, 'El motivo es necesario'] }
});

module.exports = mongoose.model('HorasExtras', horasExtrasSchema);