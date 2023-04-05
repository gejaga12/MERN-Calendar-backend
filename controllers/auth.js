const { response } = require('express');

const crearUsuario = (req, res = response) => {

    console.log('====================================');
    console.log(req.body);
    console.log('====================================');

    res.json({
        ok: true,
        msg: 'registro',
        user: req.body,
    });
}

const loginUsuario = (req, res = response) => {
       res.json({
        ok: true,
        msg: 'login'
    });
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
}

module.exports = { crearUsuario, loginUsuario, revalidarToken };




