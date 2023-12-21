//importar dependencia
const express = require("express")
//cargar routes

const router = express.Router();

//importar controlador

const SongController = require("../controllers/song")
//importar rutas

router.get("/prueba", SongController.prueba)

//importar router

module.exports = router;

