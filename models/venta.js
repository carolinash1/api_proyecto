const {Schema, model}= require('mongoose')

//Definir la estructura de la colección 
const VentaSchema = Schema({
    codigo: {
        type: Number
    },
    cliente: {
        type: String
    },
    producto: {
        type: String
    },
    total: {
        type: Number
    },
    cuotas: {
        type: Number
    },
    fecha: {
        type: String
    },
    factura: {
        type: String
    }

})
module.exports = model('venta', VentaSchema)
