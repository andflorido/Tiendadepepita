 let express = require("express");


let Productos = require("../controllers/productos");


let api = express.Router();


api.post("/productos/registrarProductos", Productos.registrarProductos);


module.exports = api;
