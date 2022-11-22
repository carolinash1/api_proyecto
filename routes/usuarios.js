const { Router } = require('express')
const router = Router() //Para obtener la función del router 
const {getUsuario, postUsuario, patchUsuario, putUsuario, deleteUsuario} = require('../controllers/usuario')

router.get('/', getUsuario)
router.post('/', postUsuario)
router.patch('/', patchUsuario)
router.put('/', putUsuario)
router.delete('/', deleteUsuario)


module.exports = router