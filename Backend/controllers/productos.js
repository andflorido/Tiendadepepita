// importamos modelo de curso
let Productos = require("../modelo/productos");
const registrarProductos = (req, res) => {
  let params = req.body;
  let productos = new Productos();
  if (
    params.nombre &&
    params.descripcion &&
    params.imagen &&
    params.precioTotal &&
    params.precioCompra &&
    params.cantidad &&
    params.idCategoria ){

productos.nombre = params.nombre;
productos.descripcion = params.descripcion;
productos.imagen = params.imagen;
productos.precioTotal = params.precioTotal;
productos.precioCompra = params.precioCompra;
productos.cantidad = params.cantidad;
productos.idCategoria = params.idCategoria;

productos.save((err, datosProductos) => {

if (err) {
    res.status(500).send({ mensaje: "error al conectar al servidor" });
  } else {
    if (datosProductos) {
      res.status(200).send({ curso: datosProductos });
    } else {
      res.status(401).send({ mensaje: "no se pudo registrar el producto" });
    }
  }

});
  } else {
    res.status(401).send({ mensaje: "Datos incompletos" });
  }
};

module.exports = {
  registrarProductos,
}; 