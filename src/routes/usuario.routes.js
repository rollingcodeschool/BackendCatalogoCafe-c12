import { Router } from "express";
import { crearUsuario, leerUsuarios } from "../controllers/usuario.controllers.js";

const router = Router();

router.route('/').post(crearUsuario).get(leerUsuarios)

export default router;