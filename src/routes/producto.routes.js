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
  .post(validacionProducto, crearProducto)
  .get(obtenerProductos);
router
  .route("/:id")
  .get(obtenerProductoPorId)
  .delete(borrarProductoPorId)
  .put(validacionProducto, editarProductoPorId);

export default router;
