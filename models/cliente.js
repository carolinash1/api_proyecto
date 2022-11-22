const {Schema, model} = require('mongoose')

//Definir la estructura de la colección
const ClienteSchema = Schema ({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    email: {
        type: String
    },
    cedula: {
        type: Number
    },
    telefono: {
        type: Number
    },
    direccion: {
        type: String
    },
    departamento: {
        type: String
    },
    ciudad: {
        type: String
    }
    
})

module.exports = model('Cliente',ClienteSchema)