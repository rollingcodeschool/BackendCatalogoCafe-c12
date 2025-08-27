import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";

export const crearUsuario = async (req,res)=>{
    try {
        const saltos = bcrypt.genSaltSync(10);
        const passwordEncriptada = bcrypt.hashSync(req.body.password, saltos)
        req.body.password = passwordEncriptada

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