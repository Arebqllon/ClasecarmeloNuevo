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
        console.log("CLIENTES:", clientes);

        res.render('pages/index2', { clientes });

    } catch (error) {
        console.log(error);
        res.render('pages/error', { error: error.message });
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

        console.log("BODY:", req.body);

        const clienteNuevo = {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        };

        const cliente = await Cliente.create(clienteNuevo);

        console.log("GUARDADO:", cliente);

        return res.redirect('/api/v1/clientes');

    } catch (error) {
        console.log("ERROR AL GUARDAR:", error.message);

        return res.render('pages/registrarCliente', {
            mensaje: error.message
        });
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
