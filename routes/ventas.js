const { Router } = require('express')
const router = Router() //Obtener la función Router

const{getVenta, postVenta, deleteVenta, putVenta, patchVenta} = require('../controllers/venta')

router.get('/', getVenta)
router.post('/', postVenta)
router.put('/', putVenta)
router.patch('/', patchVenta)
router.delete('/', deleteVenta)

//exportar modulo
module.exports = router
