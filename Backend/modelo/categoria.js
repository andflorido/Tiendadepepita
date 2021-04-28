let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let categoriaSchema = Schema({
  nombre: String,
  descripcion: String,
  producto: String,
  precio: Number,
});
module.exports = mongoose.model("categoria", categoriaSchema);