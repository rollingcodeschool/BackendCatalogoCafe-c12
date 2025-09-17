const errorMulter = (err, req, res, next) =>{
    if(err && err.code === 'LIMIT_FILE_SIZE'){
        return res.status(400).json({mensaje:'La imagen supera el tamaño maximo permitido (2MB)'})
    }
    next();
}

export default errorMulter