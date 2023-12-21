//accion de prueba

const prueba = (req, res) => {
    return res.status(200).send(
        {
            status: "success",
            message: "mensaje desde coneccion contollers/song.js"
        }
    )
}

//exportar acciones

module.exports = {
    prueba
}