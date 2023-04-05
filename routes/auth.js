/* 
    Rutas de Usuarios /Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();

const { crearUsuario } = require('../controllers/auth');
const { loginUsuario } = require('../controllers/auth')
const { revalidarToken } = require('../controllers/auth')

router.post('/new', crearUsuario)

router.post('/', loginUsuario)

router.get('/renew', revalidarToken)

module.exports = router;







