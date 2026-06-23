require('dotenv').config();

const express = require('express');
const conectarDB = require('./config/connectiondb');



const clienteController = require('./controllers/cliente.controller');
const servicioController = require('./controllers/servicio.controller');
const productoController = require('./controllers/producto.controller');

const app = express();
const PORT = 8000;

app.use(express.json());
app.set('view engine', 'ejs');

// Conexión a MongoDB
conectarDB();

app.get('/cliente', function(req,res){
   fetch('https://clasecarmelo-1.onrender.com/clientes')
   .then(response => response.json())
   .then(data => {
       res.render('pages/index2',
           {clientes:data}
       )
   });
});

app.get('/', clienteController.home)
app.get('/formulario', clienteController.formulario)
app.get('/clientes', clienteController.consultar);
app.get('/clientes/:id', clienteController.consultarId);
app.post('/clientes', clienteController.registrar);
app.put('/clientes/:id', clienteController.actualizar)
app.delete('/clientes/:id', clienteController.eliminar);


app.get('/servicios', servicioController.consultar);
app.get('/servicios/:id', servicioController.consultarId);
app.post('/servicios', servicioController.crear);
app.put('/servicios/:id', servicioController.actualizar);
app.delete('/servicios/:id', servicioController.eliminar);


app.get('/productos', productoController.consultar);
app.get('/productos/:id', productoController.consultarId);
app.post('/productos', productoController.crear);
app.put('/productos/:id', productoController.actualizar);
app.delete('/productos/:id', productoController.eliminar);



app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});