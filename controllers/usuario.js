const usuario = require('../models/usuario')
const Usuario = require('../models/usuario')

const getUsuario = async (req,res) =>{

    const usuario = await Usuario.find()
    // const {placa, color, precio} = req.query
    res.json({
        msg: 'USUARIO GET API',
        usuario
    })
}

const postUsuario = async(req,res) =>{
    //Desestructuración de parámetros 
    const {contraseña, email} = req.body
    //Crear el objeto
    const usuario1 = new usuario({contraseña, email})
    await usuario1.save() //Guardar en mongodb 
    res.json({
        msg: 'USUARIO POST API',
        usuario1
    })
}

//Put actualiza todo 
const putUsuario = async(req,res) => {
    const {contraseña, email} = req.body
    const usuario1 = await Usuario.findOneAndUpdate({email : email}, {contraseña : contraseña})
    res.json({
        msg: 'USUARIO API PUT',
        usuario1
    })
}

//modificación parcial
const patchUsuario = async(req,res) => {
    const {contraseña, email} = req.body
    const usuario1 = await Usuario.findOneAndUpdate({email : email}, {contraseña : contraseña})
    res.json({
        msg: 'USUARIO API PATCH',
        usuario1
    })
}

//Eliminar
const deleteUsuario = async(req, res)=>{
    const {email} = req.query
  
    //Buscar y borrar
    const usuario1= await Usuario.findOneAndDelete({ email : email}) //Antes de las llaves es el atributo 
    res.json({
        msg:'USUARIO DELETE API',
        usuario1
    })
}

module.exports = {
    getUsuario, 
    postUsuario,
    patchUsuario,
    putUsuario,
    deleteUsuario
}