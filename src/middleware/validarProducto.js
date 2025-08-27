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
    .withMessage(
      "La categoría no es válida, deberia ser una de las siguientes opciones: Infusiones, Batidos, Dulce, Salado"
    ),
  body("descripcion_breve")
    .notEmpty()
    .withMessage("La descripcion breve es obligatoria")
    .isLength({ min: 5, max: 250 })
    .withMessage("La descripcion breve debe tener entre 5 y 250 caracteres"),
  body("descripcion_amplia")
    .notEmpty()
    .withMessage("La descripcion amplia es obligatoria")
    .isLength({ min: 10, max: 500 })
    .withMessage("La descripcion amplia debe tener entre 10 y 500 caracteres"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionProducto;
