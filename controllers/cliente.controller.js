const Cliente = require('../models/cliente.model');


exports.consultar = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.consultarId = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        res.json(cliente);
    } catch (error) {
        res.status(500).json(error);
    }
};


exports.crear = async (req, res) => {
    try {
        const cliente = new Cliente(req.body);
        await cliente.save();
        res.json(cliente);
    } catch (error) {
        res.status(500).json(error);
    }
};


exports.actualizar = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(cliente);
    } catch (error) {
        res.status(500).json(error);
    }
};


exports.eliminar = async (req, res) => {
    try {
        await Cliente.findByIdAndDelete(req.params.id);
        res.json({
            mensaje: "Cliente eliminado"
        });
    } catch (error) {
        res.status(500).json(error);
    }
};
