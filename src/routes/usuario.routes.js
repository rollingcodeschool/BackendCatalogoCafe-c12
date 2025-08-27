import { Router } from "express";
import { crearUsuario, leerUsuarios } from "../controllers/usuario.controllers.js";
import validacionUsuario from "../middleware/validarUsuario.js";

const router = Router();

router.route('/').post(validacionUsuario,crearUsuario).get(leerUsuarios)

export default router;