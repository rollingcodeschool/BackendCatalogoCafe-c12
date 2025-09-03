import { Router } from "express";
import {
  crearProducto,
  obtenerProductos,
  prueba,
  obtenerProductoPorId,
  borrarProductoPorId,
  editarProductoPorId,
} from "../controllers/producto.controllers.js";
import validacionProducto from "../middleware/validarProducto.js";
import verificarJWT from "../middleware/verificarJWT.js";
import validarIdProducto from "../middleware/validarIdProducto.js";

const router = Router();
// las solicitudes/peticiones/request
/*
get obtener
post crear
put/patch actualizar
delete borrar
*/
router.route("/prueba").get(prueba);
router
  .route("/")
  .post([verificarJWT,validacionProducto], crearProducto)
  .get(obtenerProductos);
router
  .route("/:id")
  .get(validarIdProducto,obtenerProductoPorId)
  .delete([verificarJWT, validarIdProducto],borrarProductoPorId)
  .put([verificarJWT,validarIdProducto,validacionProducto], editarProductoPorId);

export default router;
