//importar dependencia
const express = require("express")
//cargar routes

const router = express.Router();

//importar controlador

const AlbumController = require("../controllers/album")
//importar rutas

router.get("/prueba", AlbumController.prueba)

//importar router

module.exports = router;

