const Servicio = require('../models/servicio.model');

exports.consultar = async (req, res) => {
    try {

        const servicios = await Servicio.find();

        return res.render('pages/indexS', {
            servicios: servicios
        });

    } catch (error) {

        return res.render('pages/error', {
            error: error.message
        });
    }
};
exports.registrar = async (req, res) => {
    try {

        console.log("BODY:", req.body);

        const servicioNuevo = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            duracionMinutos: req.body.duracionMinutos,
            precio: req.body.precio,
            categoria: req.body.categoria
        };

        const servicio = await Servicio.create(servicioNuevo);

        console.log("GUARDADO:", servicio);

        return res.redirect('/api/v1/servicios');

    } catch (error) {

        console.log("ERROR AL GUARDAR:", error.message);

        return res.render('pages/registrarServicio', {
            mensaje: error.message
        });
    }
};


exports.formularioP = async(req, res) => {
    res.render('pages/registrarServicio')
}

exports.consultarId = async (req, res) => {
    try {
        const servicio = await Servicio.findById(req.params.id);
        res.json(servicio);
    } catch (error) {
        res.status(500).json(error);
    }
};


exports.actualizar = async (req, res) => {
    try {
        const servicio = await Servicio.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(servicio);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.eliminar = async (req, res) => {
    try {
        await Servicio.findByIdAndDelete(req.params.id);

        res.json({
            mensaje: "Servicio eliminado"
        });
    } catch (error) {
        res.status(500).json(error);
    }
};