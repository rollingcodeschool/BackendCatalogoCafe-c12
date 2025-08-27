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

export const leerUsuarios = async (req, res) =>{
    try {
        const listaUsuarios = await Usuario.find()
        res.status(200).json(listaUsuarios)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Error al listar los usuarios"})
    }
}