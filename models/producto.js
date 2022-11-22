const {Schema, model} = require('mongoose')

//Definir la estructura de la colección
const ProductoSchema = Schema ({
    codigo: {
        type: Number
    },
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    precio: {
        type: Number
    }
    
})

module.exports = model('Producto',ProductoSchema)