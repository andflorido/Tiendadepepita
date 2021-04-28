let mongoose = require ("mongoose");
let Schema = mongoose.Schema;

let productosSchema = Schema ({
    nombre: String,
    descripcion: String,
    imagen: String,
    precioTotal: Number,
    precioCompra: Number,
    cantidades: Number,
    idCategoria: { type: Schema.ObjectId, ref: "categoria" },
});
module.exports= mongoose.model ("productos", productosSchema);