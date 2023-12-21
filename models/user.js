//usamos moongose

const {Schema, model} = require("mongoose");

const UserSchema = Schema({
    name:{
        type: String,
        required: true
    },
    surname: String,
    nick:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    role:{
        type: String,
        default: "role_user"
    },
    Image:{
        type: String,
        default: "default.png"
    },
    created_at:{
        type: Date,
        require: Date.now
    },
})

module.exports = model("User", UserSchema, "users") //forzamos el nombre de la coleccion dentro de MongoDB

