const cliente = require('../models/cliente')
const Cliente = require('../models/cliente')

const getCliente = async (req,res) =>{

    const cliente = await Cliente.find()
    // const {placa, color, precio} = req.query
    res.json({
        msg: 'CLIENTE GET API',
        cliente
    })
}

const postCliente = async(req,res) =>{
    //Desestructuración de parámetros 
    const {nombre, apellido, email, cedula, telefono, direccion, departamento, ciudad} = req.body
    //Crear el objeto
    const cliente1 = new cliente({nombre, apellido, email, cedula, telefono, direccion, departamento, ciudad})
    await cliente1.save() //Guardar en mongodb 
    res.json({
        msg: 'CLIENTE POST API',
        cliente1,
    })
}

//Put actualiza todo 
const putCliente= async(req,res) => {
    const {nombre, apellido, email, cedula, telefono, direccion, departamento, ciudad} = req.body
    //modificar el color y el precio en el campo de la placa
    const cliente1 = await Cliente.findOneAndUpdate({nombre : nombre}, {nombre : nombre, apellido:apellido, email:email,cedula : cedula, telefono:telefono, direccion : direccion, departamento: departamento, ciudad:ciudad})
    res.json({
        msg: 'CLIENTE API PUT',
        cliente1
    })
}

//modificación parcial
const patchCliente= async(req,res) => {
    const {nombre, apellido, email, cedula, telefono, direccion, departamento, ciudad} = req.body
    const cliente1 = await Cliente.findOneAndUpdate({nombre : nombre}, {cedula : cedula})
    res.json({
        msg: 'CLIENTE API PATCH',
        cliente1
    })
}

//Eliminar
const deleteCliente = async(req, res)=>{
    const {nombre} = req.query
  
    //Buscar y borrar
    const cliente1= await Cliente.findOneAndDelete({ nombre : nombre}) //Antes de las llaves es el atributo 
    res.json({
        msg:'CLIENTE DELETE API',
        cliente1
    })
}

module.exports = {
    getCliente, 
    postCliente,
    putCliente,
    patchCliente,
    deleteCliente
}