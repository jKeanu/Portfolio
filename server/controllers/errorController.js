import errorLogger from '../utils/cloudwatch.js';

const sendErrorDev = (err, req, res) => {
  console.log('ERROR: ', err);
  res.status(err.statusCode).json({
    status: err.status,
    err: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, req, res) => {
  errorLogger.error('Uncaught error', {
    message: err.message,
    stack: err.stack,
  });
  // Since we only fetch the projects and send emails, if there was an error that occurred
  // during those operations it can only mean server/configuration error.
  return res.status(500).json({
    status: 'error',
    message: 'Something went very wrong',
  });
};

export default function globalHandleError(err, req, res, _next) {
  const currErr = err;
  currErr.statusCode = currErr.statusCode || 500;
  currErr.status = currErr.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(currErr, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    sendErrorProd(currErr, req, res);
  }
}
