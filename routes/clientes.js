const { Router } = require('express')
const router = Router() //Para obtener la función del router 
const {getCliente, postCliente, patchCliente, putCliente, deleteCliente} = require('../controllers/cliente')

router.get('/', getCliente)
router.post('/', postCliente)
router.patch('/', patchCliente)
router.put('/', putCliente)
router.delete('/', deleteCliente)

module.exports = router