import { Router } from "express";
import {
  crearProducto,
  obtenerProductos,
  prueba,
  obtenerProductoPorId,
  borrarProductoPorId,
  editarProductoPorId,
} from "../controllers/producto.controllers.js";
import { body } from "express-validator";

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
  .post(
    [
      body("nombreProducto")
        .notEmpty()
        .withMessage("El nombre del producto es obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage(
          "El nombre del producto debe tener entre 2 y 100 caracteres"
        ),
      body("precio")
        .notEmpty()
        .withMessage("El precio es obligatorio")
        .isNumeric()
        .withMessage("El precio debe ser un número")
        .custom((valor)=>{
            if(valor >= 50 && valor <= 1000000){
               return true
            }else{
                throw new Error("El precio debe estar entre 50 y 1000000")
            }
        })
    ],
    crearProducto
  )
  .get(obtenerProductos);
router
  .route("/:id")
  .get(obtenerProductoPorId)
  .delete(borrarProductoPorId)
  .put(editarProductoPorId);

export default router;
