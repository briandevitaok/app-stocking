const jwt = require('jsonwebtoken');

//====================
//Verificar token
//=================


let verificaToken = (req, res, next) =>{

    let token = req.get('Authorization');

    jwt.verify(token, process.env.SECRET_TOKEN, (err, decode) =>{
        if (err){
            return res.status(401).json({
                ok:false, 
                err: {
                    message: 'Token Invalido'
                }
            })
        }

        req.usuario = decode.usuario;
        next();
    });

   

};


//====================
//Verificar AdminRole
//=================



let verificaAdminRole = (req, res, next)=>{

    let usuario = req.usuario;


    if (usuario.role === 'ADMIN_ROLE' ){
       next();
    } else {


    res.json({
        err: {
            message:'El usuario no es administrador'
        }
    })
}
};




module.exports ={
    verificaToken,
    verificaAdminRole
}