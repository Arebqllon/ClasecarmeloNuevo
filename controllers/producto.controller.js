const Producto = require('../models/producto.model');

exports.consultar = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.consultarId = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        res.json(producto);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.crear = async (req, res) => {
    try {
        const producto = new Producto(req.body);
        await producto.save();
        res.json(producto);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.actualizar = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(producto);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.eliminar = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);

        res.json({
            mensaje: "Producto eliminado"
        });
    } catch (error) {
        res.status(500).json(error);
    }
};