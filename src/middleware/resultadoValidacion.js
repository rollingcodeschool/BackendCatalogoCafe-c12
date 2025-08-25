import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next) => {
  const errores = validationResult(req);
  //errores.isEmpty(): true /false
  if (!errores.isEmpty()) {
    return res.status(400).json(errores.array());
  }
  next();
};

export default resultadoValidacion;
