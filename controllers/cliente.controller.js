const Cliente = require('../models/cliente.model');


exports.home = async(req, res) => {
    res.render('pages/index')
}
exports.formulario = async(req, res) => {
    res.render('pages/registrarCliente')
}

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


exports.registrar = async (req, res) => {
    try {
        const cliente = new Cliente(req.body);
        await cliente.insertOne();
        res.render('pages/registrarCliente');
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
