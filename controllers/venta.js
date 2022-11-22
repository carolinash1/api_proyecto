const Venta = require('../models/venta')

//get obtener toda la informacion
const getVenta = async(req, res) => {
    const venta1= await Venta.find()

    res.json ({
        msg: 'Venta GET API',
        venta1
    })

}

//insercion de datos 
const postVenta = async(req, res) => {
    //Desestructuracion de parametros
    const {codigo, cliente, producto, total, cuotas, fecha, factura} = req.body
    //crear el objeto 
    const venta1 = new Venta({codigo, cliente, producto, total, cuotas, fecha, factura})
    await venta1.save()  //metodo para insertar o guardar los datos en mongo

    res.json({
        msg: 'Venta POST API',
        venta1
    })
}

//PUT
const putVenta= async (req, res) => {
    const {codigo, cliente, producto, total, cuotas, fecha, factura} = req.body
    const venta1 = await Venta.findOneAndUpdate({codigo: codigo},{codigo: codigo, cliente: cliente, producto: producto, total : total, cuotas : cuotas, fecha : fecha, factura : factura})

    res.json({
        msg: 'Venta PUT API',
        venta1
    })
}

//PATCH:Modificación parcial
const patchVenta = async (req, res) => {
    const {codigo, cliente, producto, total, cuotas, fecha, factura} = req.body
    const venta1 = await Venta.findOneAndUpdate({codigo: codigo},{producto:producto})

    res.json({
        msg: 'Venta PUT API',
        venta1
    })
}

//DELETE
const deleteVenta = async(req, res) => {
    const { codigo } = req.query

    //Buscar y eliminar
    //Antes de las llaves es el atributo
    const venta1 = await Venta.findOneAndDelete({codigo:codigo})

    res.json({
        msg: 'Venta DELETE API',
        venta1
    })
}


module.exports = {
    getVenta,
    postVenta,
    putVenta,
    patchVenta,
    deleteVenta
}

