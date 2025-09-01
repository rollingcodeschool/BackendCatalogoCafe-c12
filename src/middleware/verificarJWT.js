import jwt from "jsonwebtoken";

const verificarJWT = (req, res, next) => {
  try {
    const token = req.headers["x-token"];
    console.log(token);
    //1- verificar si me enviaron el token
    if (!token) {
      return res.status(401).json({ mensaje: "No se proporcionó un token" });
    }
    //2- verificar veracidad del token
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    console.log(payload);
    req.nombreUsuario = payload.nombreUsuario;
    req.email = payload.email;
    next();
  } catch (error) {
    console.error(error.message);
    res
      .status(401)
      .json({ mensaje: "Error al verificar el token", error: error.message });
  }
};

export default verificarJWT;
