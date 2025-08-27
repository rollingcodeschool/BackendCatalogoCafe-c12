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

export const login = async(req, res)=>{
    try {
        const {email, password} = req.body
        // 1- verficiar que existe un usuario con el email
        // const usuarioBuscado = await Usuario.findOne({email: req.body.email})
        const usuarioBuscado = await Usuario.findOne({email})
        if(!usuarioBuscado){
          return  res.status(404).json({error: "Usuario no encontrado"})
        }
        //2- verificar si ese usuario que encontre tiene el password correcto

        const passwordValido = bcrypt.compareSync(password, usuarioBuscado.password)
        if(!passwordValido){
          return res.status(401).json({error: "Credenciales inválidas"})
        }
        // generar el token jwt
        //enviar el token al front
        res.status(200).json({mensaje: "Login exitoso"})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Error en el login"})
    }
}