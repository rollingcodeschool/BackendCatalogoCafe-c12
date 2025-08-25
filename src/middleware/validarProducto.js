import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionProducto = [
  body("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre del producto debe tener entre 2 y 100 caracteres"),
    // todo: agregar una validacion customizada para verificar si el producto existe
  body("precio")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .custom((valor) => {
      if (valor >= 50 && valor <= 1000000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre 50 y 1000000");
      }
    }),
    body("categoria")
    .notEmpty()
    .withMessage("La categoría es obligatoria")
    .isIn(["Infusiones", "Batidos", "Dulce", "Salado"])
    .withMessage("La categoría no es válida, deberia ser una de las siguientes opciones: Infusiones, Batidos, Dulce, Salado"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionProducto;
