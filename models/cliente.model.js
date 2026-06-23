const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, 
    required: [true, 'Campo obligatorio']
  },
  email: { type: String, 
    required: [true, 'Campo obligatorio'],
    unique: true 
  },
  telefono: { type: String,
    minLength : [10, 'Error, faltan digitos'],
    maxLength : [10, 'Error, muchos digitos'],
   }
});

module.exports = mongoose.model('Cliente', clienteSchema);
