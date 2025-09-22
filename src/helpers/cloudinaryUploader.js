import cloudinary from "./cloudinary.js"

const subirImagenCloudinary = (buffer) =>{
    return new Promise((resolve, reject)=>{
        const stream = cloudinary.uploader.upload_stream(
            {folder: 'productos'},
            (error, result)=>{
                // obtuve el resultado, es decir funciona la subida del buffer
                if(result){
                    resolve(result)
                }else{
                    reject(error)
                }
            }
        )
        stream.end(buffer)
    })
}

export default subirImagenCloudinary;