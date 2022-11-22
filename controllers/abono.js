const Abono = require('../models/abono')

//get obtener toda la informacion
const getAbono = async(req, res) => {
    const abono1= await Abono.find()

    res.json ({
        msg: 'Abono GET API',
        abono1
    })

}

//insercion de datos 
const postAbono = async(req, res) => {
    //Desestructuracion de parametros
    const {codigo, cliente, factura, abono, total, resta} = req.body
    //crear el objeto 
    const abono1 = new Abono({codigo, cliente, factura, abono, total, resta})
    await abono1.save()  //metodo para insertar o guardar los datos en mongo

    res.json({
        msg: 'Abono POST API',
        abono1
    })
}

//PUT
const putAbono = async (req, res) => {
    const {codigo, cliente, factura, abono, total, resta} = req.body
    const abono1 = await Abono.findOneAndUpdate({codigo:codigo},{cliente:cliente, factura:factura, abono:abono, total: total, resta:resta})

    res.json({
        msg: 'Abono PUT API',
        abono1
    })
}

//PATCH:Modificación parcial
const patchAbono = async (req, res) => {
    const {codigo, cliente, factura, abono, total, resta} = req.body
    const abono1 = await Abono.findOneAndUpdate({codigo: codigo},{cliente:cliente})

    res.json({
        msg: 'Abono PUT API',
        abono1
    })
}

//DELETE
const deleteAbono = async(req, res) => {
    const { codigo } = req.query

    //Buscar y eliminar
    //Antes de las llaves es el atributo
    const abono1 = await Abono.findOneAndDelete({codigo:codigo})

    res.json({
        msg: 'Abono DELETE API',
        abono1
    })
}


module.exports = {
    getAbono,
    postAbono,
    putAbono,
    patchAbono,
    deleteAbono
}