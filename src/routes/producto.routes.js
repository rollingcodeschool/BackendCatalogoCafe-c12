import { Router } from "express"
import { crearProducto, obtenerProductos, prueba, obtenerProductoPorId, borrarProductoPorId, editarProductoPorId } from "../controllers/producto.controllers.js";

const router = Router();
// las solicitudes/peticiones/request
/*
get obtener
post crear
put/patch actualizar
delete borrar
*/
router.route('/prueba').get(prueba);
router.route('/').post(crearProducto).get(obtenerProductos)
router.route('/:id').get(obtenerProductoPorId).delete(borrarProductoPorId).put(editarProductoPorId)

export default router;