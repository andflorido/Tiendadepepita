let Categoria = require("../modelo/categoria");

//registramos categoria POST
const registrarCategoria = (req, res) => {
  let params = req.body;
  let categoria = new Categoria();
  categoria.nombre = params.nombre;
  categoria.descripcion = params.descripcion;
  categoria.producto = params. producto;
  categoria.precio = params.precio;
  categoria.save((err, saveCategoria) => {
    if (err) {
      res.status(500).send({ mensaje: "error al conectar al servidor" });
    } else {
      if (saveCategoria) {
        res.status(200).send({ categoria: saveCategoria });
      } else {
        res.status(401).send({ mensaje: "no se pudo registrar la categoria" });
      }
    }
  });
};

const buscarCategoria = (req, res) => {
  let id = req.params["id"];
  Categoria.findById({ _id: id }, (err, datosCategoria) => {
    if (err) {
      res.status(500).send({ mensaje: "error al conectar al servidor" });
    } else {
      if (datosCategoria) {
        res.status(200).send({ categoria: datosCategoria });
      } else {
        res.status(401).send({ mensaje: "la categoria no existe" });
      }
    }
  });
};
const listaCategoria = (req, res) => {
    let nombre = req.params["nombre"];
  Categoria.find({ nombre: new RegExp(nombre, "i") }, (err, datosCategoria) => {
  
    if (err) {
      res.status(500).send({ mensaje: "error al conectar al servidor" });
    } else {
      if (datosCategoria) {
        res.status(200).send({ categoria: datosCategoria });
      } else {
        res.status(401).send({ mensaje: "no hay categorias" });
      }
    }
  });
};

//Editar categoria
const editarCategoria = (req, res) => {
  //obtenemos el id de la categoria
  let id = req.params["id"];
  //obtenemos los datos que llegan de la API
  let params = req.body;
  // buscar la categoria por ID y editarla
  Categoria.findByIdAndUpdate(
    {_id:id},
    { nombre: params.nombre, descripción: params.descripcion },
    (err, datosCategoria) => {
      if (err) {
        res.status(500).send({ mensaje: "error al conectar al servidor" });
      } else {
        if (datosCategoria) {
          res.status(200).send({ categoria: datosCategoria });
        } else {
          res.status(401).send({ mensaje: "La categoria no se puede editar" });
        }
      }
    }
  );
};

//Eliminamos una categoria
const eliminarCategoria = (req,res) => {
  // obtener el di de la categoria
  let id = req.params["id"];
  // Eliminamos la categoria por el ID
  Categoria.findByIdAndDelete( {_id:id},    (err, datosCategoria) => {
      if (err) {
        res.status(500).send({ mensaje: "error al conectar al servidor" });
      } else {
        if (datosCategoria) {
          res.status(200).send({ categoria: datosCategoria });
        } else {
          res.status(401).send({ mensaje: "La categoria no se puede editar" });
        }
      }
    });
  };

module.exports = {
  registrarCategoria,
  buscarCategoria,
  listaCategoria,
  editarCategoria,
  eliminarCategoria,
};