const Producto = require('../models/producto.model');

exports.consultar = async (req, res) => {
    try {

        const productos = await Producto.find();

        return res.render('pages/indexP', {
            productos: productos
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

        const productoNuevo = {
            nombre: req.body.nombre,
            precio: req.body.precio,
            stock: req.body.stock
        };

        const producto = await Producto.create(productoNuevo);

        console.log("GUARDADO:", producto);

        return res.redirect('/api/v1/productos');

    } catch (error) {

        console.log("ERROR AL GUARDAR:", error.message);

        return res.render('pages/registrarProducto', {
            mensaje: error.message
        });
    }
};


exports.formularioP = async(req, res) => {
    res.render('pages/registrarProducto')
}

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