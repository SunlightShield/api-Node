//importar conexion a base de datos

const coneccion = require("./database/coneccion");

//importar dependencias
const express = require ("express");
const cors = require ("cors");

//Mensaje
console.log("API REST con node, corriendo");

//ejecutar conexion a la db
coneccion()

//crear servidor
const app = express();
const port = 3911;

//cnfigurar cors
app.use(cors());

//cargar rutas
const UserRoutes = require("./routes/user")
const AlbumRoutes = require("./routes/album")
const SongRoutes = require("./routes/song")
const ArtistRoutes = require("./routes/artist")

app.use("/api/user", UserRoutes);
app.use("/api/album", AlbumRoutes);
app.use("/api/song", SongRoutes);
app.use("/api/artist", ArtistRoutes);


//objetos del body a js
app.use(express.json())
app.use(express.urlencoded({extended: true}));

//cargar rutas

//ruta de prueba
app.get("/ruta-probando", (req, res) => {
    return res.status(200).send({
        "id": 12,
        "nombre": "seba",
        "apellido": "funciona"

    })
})

//poner el servidor en marcha
app.listen(port, () => {
    console.log("servidor de node en el puerto: ", port);
})