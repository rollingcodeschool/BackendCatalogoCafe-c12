import jwt from 'jsonwebtoken';

const generarJWT = async (nombreUsuario, email)=>{
    try {
        const payload = {nombreUsuario, email}
        const token = await jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: '2h' });
        return token;
    } catch (error) {
        console.error(error);
        throw new Error('Erro al generar JWT')
    }
}

export default generarJWT;