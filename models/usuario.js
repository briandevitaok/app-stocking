const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')


let Schema = mongoose.Schema;


let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },

    password: {
        type:String,
        require: [true, 'El password es requerido']
    },

    img: {
        type: String,
        required:false
    }, //No es obligatoria
    role: {
        type:String,
        default: 'USER_ROLE',
        enum: rolesValidos
    }, //default: user
    estado: {
        type: Boolean,
        default: true
    },//Boleano
    google: {
        type:Boolean,
        default: false
    } //bolean
});

usuarioSchema.methods.toJSON = function (){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;


    return userObject;
}

usuarioSchema.plugin(uniqueValidator, {message:'{PATH} debe de ser unico'});

module.exports = mongoose.model('Usuario', usuarioSchema);