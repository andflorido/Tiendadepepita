# Tiendadepepita

#USUARIO.JS
nombres: String,
  apellidos: String,
  edad: Number,
  correo:String,
  pass: String,
  rol: String,
  fechaRegistro: { type: Date, default: Date.now },
  
  #PRODUCTOS.JS
  nombre: String,
    descripcion: String,
    imagen: String,
    precioTotal: Number,
    precioCompra: Number,
    cantidades: Number,
    idCategoria: { type: Schema.ObjectId, ref: "categoria" },
    
  #CATEGORIA.JS
  nombre: String,
  descripcion: String,
  producto: String,
  precio: Number,

   #COMPRA.JS
  idUsuario: { type: Schema.ObjectId, ref: "usuario" },
  fechaCompra: { type: Date, default: Date.now },
  
  #DETALLECOMPRA.JS
  idProducto: { type: Schema.ObjectId, ref: "producto" },
  idCompra: { type: Schema.ObjectId, ref: "compra" },
  cantidad: Number,
  
  
