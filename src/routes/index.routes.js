import { Router } from "express"
import productoRouter from "./producto.routes.js";
import usuarioRouter from "./usuario.routes.js";

const router = Router();

router.use('/productos', productoRouter)
router.use('/usuarios', usuarioRouter)

export default router;