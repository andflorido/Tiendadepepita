// Variables de modulos
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");



// Variable para puerto de conexion del servidor
let port = process.env.PORT || 3001;

let app = express();

let Usuario = require("./routes/usuario");
let Categoria = require("./routes/categoria");
let Productos = require("./routes/productos");

// Conexion a DB
mongoose.connect(
  "mongodb://localhost:27017/Tiendadepepita",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("Servidor DB: ON");
      app.listen(port, function () {
        console.log("Servidor Backend funcionando en el puerto :" + port);
      });
    }
  }
);

// Analizar las url
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", Usuario);
app.use("/api", Categoria);
app.use("/api", Productos);



module.exports = app;

