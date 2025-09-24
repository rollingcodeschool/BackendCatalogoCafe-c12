import { Router } from "express"
import productoRouter from "./producto.routes.js";
import usuarioRouter from "./usuario.routes.js";
import pagosRouter from "./pagos.routes.js"
const router = Router();

router.use('/productos', productoRouter)
router.use('/usuarios', usuarioRouter)
router.use('/pagos', pagosRouter)

export default router;