//importar dependencia
const express = require("express")
//cargar routes

const router = express.Router();

//importar controlador

const UserController = require("../controllers/user")
//importar rutas

router.get("/prueba", UserController.prueba);
router.post("/register", UserController.register);

//importar router

module.exports = router;

