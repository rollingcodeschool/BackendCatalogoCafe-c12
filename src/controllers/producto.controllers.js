import subirImagenCloudinary from "../helpers/cloudinaryUploader.js";
import Producto from "../models/producto.js";

export const prueba = (req, res) => {
  res.status(201);
  res.send("Este es un mensaje desde el controlador");
};

export const crearProducto = async (req, res) => {
  try {
    let imagenUrl = "";
    if (req.file) {
      const resultado = await subirImagenCloudinary(req.file.buffer);
      console.log(resultado);
      imagenUrl = resultado.secure_url;
    } else {
      imagenUrl =
        "https://images.pexels.com/photos/8101544/pexels-photo-8101544.jpeg";
    }
    //modificamos el objeto que guardo en la BD
    const productoNuevo = new Producto({
      ...req.body,
      imagen: imagenUrl,
    });
    //guardar en la BD
    await productoNuevo.save();

    res.status(201).json({ mensaje: "El producto fue creado correctamente", producto: productoNuevo });
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

export const borrarProductoPorId = async (req, res) => {
  try {
    //1-pedir a mongoose eliminar un producto por el id
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
    //2- verificar que pude encontrar el producto a eliminar
    if (!productoEliminado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    //3-enviar la respuesta que pude eliminar el producto
    res.status(200).json({ mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "No se pudo eliminar el producto por ID" });
  }
};

export const editarProductoPorId = async (req, res) => {
  try {
    // todo: aqui tengo que validar
    //1- buscar el producto por id y modificarlo
    const productoEditado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    //2- chequear si pudo encontrar el producto
    if (!productoEditado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    //3- enviar un mensaje de solicitud exitosa
    res.status(200).json({ mensaje: "Producto editado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al editar el producto por ID" });
  }
};

export const productosPaginados = async (req, res) => {
  try {
    //1- saber que pagina debemos enviar
    const pagina = parseInt(req.query.pagina) || 1;
    //2- cuantos productos mostraremos por pagina
    const limite = parseInt(req.query.limite) || 10;
    //3- calcular cuantos productos debemos saltar u omitir
    const salto = (pagina - 1) * limite;
    //4-buscar los productos de la pagina x
    //const productos = await Producto.find().skip(salto).limit(limite);
    //5- averiguar cuantos productos tenemos en total en la BD
    //const total = await Producto.countDocuments();

    const [productos, total] = await Promise.all([
      Producto.find().skip(salto).limit(limite),
      Producto.countDocuments(),
    ]);
    res.status(200).json({
      productos,
      total,
      pagina,
      totalPaginas: Math.ceil(total / limite),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener los productos" });
  }
};
