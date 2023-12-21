//importar dependnecia

const prueba = (req, res) => {
    return res.status(200).send(
        {
            status: "success",
            message: "mensaje desde coneccion contollers/user.js"
        }
    )
}

//registro usuario

    const register = (req, res) =>{
        //capturar datos:
        let params = req.body;
        console.log(params)

        // if(!params.name || !params.nick || !params.email || !params.password){
        //     return res.status(400)
        // }

        return res.status(200).send({
            status: "success",
            message: "registro"
        }
        );
    }

//exportar acciones

module.exports = {
    prueba,
    register
}