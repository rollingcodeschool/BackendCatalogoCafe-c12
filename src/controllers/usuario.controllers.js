import Usuario from "../models/usuario.js";

export const crearUsuario = async (req,res)=>{
    try {
        res.send('Desde la funcion crearusuario')
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Error al crear el usuario"})
    }
}