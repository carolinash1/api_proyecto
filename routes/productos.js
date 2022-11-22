const { Router } = require('express')
const router = Router() //Para obtener la función del router 
const {getProducto, postProducto, patchProducto, putProducto, deleteProducto} = require('../controllers/producto')

router.get('/', getProducto)
router.post('/', postProducto)
router.patch('/', patchProducto)
router.put('/', putProducto)
router.delete('/', deleteProducto)

module.exports = router