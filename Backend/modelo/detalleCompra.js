// Variable Mongoose
let mongoose = require("mongoose");
// metodo que permite crear esquemas desde node/express
let Schema = mongoose.Schema;

// Se crea el esquema
let detalleCompraSchema = Schema({
  idProducto: { type: Schema.ObjectId, ref: "producto" },
  idCompra: { type: Schema.ObjectId, ref: "compra" },
  cantidad: Number,
});
// Se exporta el modulo
module.exports = mongoose.model("detallecompra", detalleCompraSchema)