
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuario')
const app = express()


app.post('/login', (req, res) => {

    let body = req.body

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {


        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!usuarioDB) {

            return res.status(500).json({
                ok: false,
                err: {
                    message: '(Usuario) o password incorrectos'
                }
            });

        }

        if (!bcrypt.compareSync(body.password, usuarioDB.password)) { 
        return res.status(500).json({
            ok: false,
            err: {
                message: 'Usuario o (password) incorrectos'
            }
        });
     }
        let token = jwt.sign({
            usuario : usuarioDB

        }, 'secret', { expiresIn:60 * 60 * 24 * 30});

       res.json({
           ok:true,
           usuario: usuarioDB,
           token
    });


})

});
module.exports = app;