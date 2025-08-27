import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionUsuario = [
  body("nombreUsuario")
    .notEmpty()
    .withMessage("El nombre del usuario es obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre del usuario debe tener entre 2 y 50 caracteres"),
  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("El email no cumple con el formato de un correo valido"),
  body("password")
    .notEmpty()
    .withMessage("La password es obligatorio")
    .matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/)
    .withMessage("El password debe tener entre 8 y 16 caracteres, incluir al menos un número, una letra mayúscula, una letra minúscula y un carácter especial"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionUsuario;
