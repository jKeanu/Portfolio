import AppError from '../utils/appError.js';
import errorLogger from '../utils/cloudwatch.js';


const handleValidationErrorDB = err => {
    if(Object.keys(err.errors).includes("members.1")){
        return new AppError("Invalid Input", 400)
    }
    const errors = Object.values(err.errors).map(el => el.message);
    const message = `Invalid input. ${errors.join('. ')}`;
    return new AppError(message, 400);
};

const sendErrorDev=(err, req, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        err: err,
        message: err.message,
        stack: err.stack
    })
}

const sendErrorProd=(err, req, res)=>{
    //If err.isOperational returned true, it means that we handled the error using AppError.
    if(err.isOperational){
        return res.status(err.statusCode).json({
            status:err.status,
            message: err.message
        })
    }
    errorLogger.error('Uncaught error', {message:err.message, stack:err.stack})
    //This line would execute if there was an unhandled error that we have not caught.
    return res.status(500).json({
        status:'error',
        message:'Something went very wrong'
    })
}


export default function globalHandleError(err, req, res, next){
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    if (process.env.NODE_ENV === 'development'){
        sendErrorDev(err, req, res)
    }else if(process.env.NODE_ENV === 'production'){
        let error = {...err};
        //Since not all properties of the 'Error' object are enumerable (message and name included)
        //we need to manually set the error.message and error.name
        error.message = err.message
        error.name = err.name
        if (error.name === 'ValidationError') error = handleValidationErrorDB(error);
        sendErrorProd(error, req, res);
    }
}