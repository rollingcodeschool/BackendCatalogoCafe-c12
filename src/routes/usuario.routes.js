import { Router } from "express";
import { crearUsuario, leerUsuarios, login } from "../controllers/usuario.controllers.js";
import validacionUsuario from "../middleware/validarUsuario.js";

const router = Router();

router.route('/').post(validacionUsuario,crearUsuario).get(leerUsuarios)
router.route('/login').post(login)

export default router;