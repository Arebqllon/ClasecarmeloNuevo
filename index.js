require('dotenv').config();

const express = require('express');
const conectarDB = require('./config/connectiondb');

const PORT = 8000;

const clienteController = require('./controllers/cliente.controller');
const servicioController = require('./controllers/servicio.controller');
const productoController = require('./controllers/producto.controller');

const app = express();

const enrutamiento = require('./router/enrutamiento.router')
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/api/v1',enrutamiento)

// Conexión a MongoDB
conectarDB();

app.get('/cliente', function(req,res){
   fetch('https://clasecarmelonuevo.onrender.com')
   .then(response => response.json())
   .then(data => {
       res.render('pages/index2',
           {clientes:data}
       )
   });
});

app.get('/', clienteController.home)
app.get('/formulario', clienteController.formulario)

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