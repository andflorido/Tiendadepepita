let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let compraSchema = Schema({
  idUsuario: { type: Schema.ObjectId, ref: "usuario" },
  fechaCompra: { type: Date, default: Date.now },
});
module.exports = mongoose.model("compra", compraSchema);