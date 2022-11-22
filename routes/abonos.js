const { Router } = require('express')
const router = Router() //Obtener la función Router

const{getAbono, postAbono, deleteAbono, putAbono, patchAbono} = require('../controllers/abono')

router.get('/', getAbono)
router.post('/', postAbono)
router.put('/', putAbono)
router.patch('/', patchAbono)
router.delete('/', deleteAbono)

//exportar modulo
module.exports = router
