import Producto from "../models/producto.js";

export const prueba = (req, res) => {
  res.status(201);
  res.send("Este es un mensaje desde el controlador");
};

export const crearProducto = async (req, res) => {
  try {
    // console.log(req)
    //1- validar los datos del req.body
    //2- crear el producto en la base de datos
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    //3- enviar el mensaje de respuesta
    res.status(201).json({ mensaje: "El producto fue creado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el producto" });
  }
};

export const obtenerProductos = async (req, res) => {
  try {
    //1 - Buscar los productos en la base de datos
    const listaProductos = await Producto.find();
    //2 - responder con el status adecuado 200 y devolver los productos
    res.status(200).json(listaProductos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener los productos" });
  }
};

export const obtenerProductoPorId = async (req, res) => {
  try {
    //1- buscar el producto por el campo del id
    const productoBuscado = await Producto.findById(req.params.id);
    //2- chequear que encontre el producto, sino existe enviar mensaje de error
    if (!productoBuscado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    //3- enviar el producto en la respuesta
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el producto por ID" });
  }
};
