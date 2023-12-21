//importar Moongose

const mongoose = require("mongoose");

//Metodo de coneccion

const coneccion = async() => {

    try{
        await mongoose.connect("mongodb://localhost:27017/app_musica");
        console.log("conectado correctamente")

    }catch(error){
        console.log("no se a establecido la coneccion");
        // throw new error ();
    }
}


//exportar la coneccion

module.exports = coneccion; 