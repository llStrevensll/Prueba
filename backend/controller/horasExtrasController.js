var HorasExtras = require('../models/horasExtras');


const horasExtrasController = {};


horasExtrasController.getHoras = async(req, res) => {

    const horas = await HorasExtras.find();
    res.json(horas);
}


horasExtrasController.crearHoras = async(req, res) => {

    //Objeto
    const horas = new HorasExtras({
        documento: req.body.documento,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaInicio: req.body.fechaInicio,
        fechaFin: req.body.fechaFin,
        horarioTurnoInicio: req.body.horarioTurnoInicio,
        horarioTurnoFin: req.body.horarioTurnoFin,
        horarioInicioExtra: req.body.horarioInicioExtra,
        horarioInicioFin: req.body.horarioInicioFin,
        motivo: req.body.motivo
    });


    await horas.save();
    res.json({
        'status': 'Guardado'
    });
}


module.exports = horasExtrasController;