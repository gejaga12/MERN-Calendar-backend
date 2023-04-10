/*
    Events Route
    /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { isDate } = require('../helpers/isDate')
const { validarJWT } = require('../middlewares/validar-jwt')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events')

const router = Router();


// TODAS TIENEN QUE PASAR POR LA VALIDACION DEL JWT
router.use(validarJWT)

// OBTENER EVENTOS
router.get('/', getEventos)

// CREAR UN NUEVO EVENTO
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom(isDate),
        check('end', 'La fecha de finalizacion es obligatoria').custom(isDate),  
        validarCampos
    ],
    crearEvento,
)

// ACTUALIZAR EVENTO
router.put('/:id', actualizarEvento)

// ELIMINAR EVENTO
router.delete('/:id', eliminarEvento)

module.exports = router;