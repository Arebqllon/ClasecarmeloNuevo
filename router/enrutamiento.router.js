
const express = require('express');
const clienteController = require('../controllers/cliente.controller')
const productoController = require('../controllers/producto.controller')
const router = express.Router();


router.get('/formulario', clienteController.formulario)
router.get('/clientes', clienteController.consultar);
router.get('/clientes/:id', clienteController.consultarId);
router.post('/clientes', clienteController.registrar);
router.put('/clientes/:id', clienteController.actualizar)
router.delete('/clientes/:id', clienteController.eliminar);


router.get('/formularioP', productoController.formularioP)
router.get('/productos', productoController.consultar);
router.get('/productos/:id', productoController.consultarId);
router.post('/productos', productoController.crear);
router.put('/productos/:id', productoController.actualizar);
router.delete('/productos/:id', productoController.eliminar);

module.exports = router;