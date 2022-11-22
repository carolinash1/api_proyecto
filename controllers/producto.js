const producto = require('../models/producto')
const Producto = require('../models/producto')

const getProducto = async (req,res) =>{

    const producto = await Producto.find()
    // const {placa, color, precio} = req.query
    res.json({
        msg: 'PRODUCTO GET API',
        producto
    })
}

const postProducto = async(req,res) =>{
    //Desestructuración de parámetros 
    const {codigo, nombre, descripcion, precio} = req.body
    //Crear el objeto
    const producto1 = new producto({codigo, nombre, descripcion, precio})
    await producto1.save() //Guardar en mongodb 
    res.json({
        msg: 'PRODUCTO POST API',
        producto1,
    })
}

//Put actualiza todo 
const putProducto = async(req,res) => {
    const {codigo, nombre, descripcion, precio} = req.body
    const producto1 = await Producto.findOneAndUpdate({codigo : codigo}, {nombre : nombre, descripcion : descripcion, precio : precio})
    res.json({
        msg: 'PRODUCTO API PUT',
        producto1
    })
}

//modificación parcial
const patchProducto = async(req,res) => {
    const {codigo, nombre, descripcion, precio} = req.body
    const producto1 = await Producto.findOneAndUpdate({codigo : codigo}, {nombre : nombre})
    res.json({
        msg: 'PRODUCTO API PATCH',
        producto1
    })
}

//Eliminar
const deleteProducto = async(req, res)=>{
    const {codigo} = req.query
  
    //Buscar y borrar
    const producto1= await Producto.findOneAndDelete({ codigo : codigo}) //antes de las llaves es el atributo 
    res.json({
        msg:'PRODUCTO DELETE API',
        producto1
    })
}

module.exports = {
    getProducto, 
    postProducto,
    putProducto,
    patchProducto,
    deleteProducto
}