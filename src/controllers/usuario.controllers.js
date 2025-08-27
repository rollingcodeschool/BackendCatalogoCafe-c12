import Usuario from "../models/usuario.js";

export const crearUsuario = async (req,res)=>{
    try {
        const usuarioNuevo = new Usuario(req.body)
        await usuarioNuevo.save()
        res.status(201).json({mensaje: 'El usuario fue creado correctamente'});
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Error al crear el usuario"})
    }
}