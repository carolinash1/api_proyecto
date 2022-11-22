const {Schema, model} = require('mongoose')

//Definir la estructura de la colección
const UsuarioSchema = Schema ({
    contraseña: {
        type: String
    },
    email: {
        type: String
    }
    
})

module.exports = model('Usuario',UsuarioSchema)