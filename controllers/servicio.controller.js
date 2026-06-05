const Servicio = require('../models/servicio.model');

exports.consultar = async (req, res) => {
    try {
        const servicios = await Servicio.find();
        res.json(servicios);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.consultarId = async (req, res) => {
    try {
        const servicio = await Servicio.findById(req.params.id);
        res.json(servicio);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.crear = async (req, res) => {
    try {
        const servicio = new Servicio(req.body);
        await servicio.save();
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