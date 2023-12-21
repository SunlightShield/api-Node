//importar dependencia
const express = require("express")
//cargar routes

const router = express.Router();

//importar controlador

const ArtistController = require("../controllers/artist")
//importar rutas

router.get("/prueba", ArtistController.prueba)

//importar router

module.exports = router;

