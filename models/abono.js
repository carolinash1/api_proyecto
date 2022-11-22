const {Schema, model}= require('mongoose')

//Definir la estructura de la colección 
const AbonoSchema = Schema({
    codigo: {
        type: Number
    },
    cliente: {
        type: String
    },
    factura: {
        type: String
    },
    abono: {
        type: Number
    },
    total: {
        type: Number
    },
    resta: {
        type: Number
    }

})
module.exports = model('abono', AbonoSchema)
