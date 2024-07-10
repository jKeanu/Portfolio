import mongoose from 'mongoose'
import http from 'http'
import app from './app.js'
import  errorLogger  from './utils/cloudwatch.js';

const server = http.createServer(app);


process.on('uncaughtException', (err) => {
  if(process.env.NODE_ENV !=='production') console.log("UNCAUGHT EXCEPTION ERROR: ", err)
  errorLogger.error('UNCAUGHT EXCEPTION! Shutting down...', {name:err.name, message:err.message, stack:err.stack})
  // When there's an uncaught exception, we need to crash our application
  // since the entire node process is in an uncleaned state.
  process.exit(1);
});

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {}).then(() => console.log('DB connection successful')).catch((err) =>{
if(process.env.NODE_ENV !=='production') console.log('DATABASE ERROR: ', err)
errorLogger.error('DB connection error', {name:err.name, message:err.message, stack:err.stack})
});

const port = process.env.PORT || 3005;

const httpServer = server.listen(port, () => {
console.log(`App running on port ${port}...`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    errorLogger.error('UNHANDLED REJECTION! Shutting down...', {message:err.message, stack:err.stack})
    if(process.env.NODE_ENV !=='production') console.log("UNHANDLED REJECTION ERROR: ", err)
    httpServer.close(() => {
      // 0 for success, 1 for uncaught exception
      // 1 is usually used here
      process.exit(1);
    });
  });

  // Handle SIGTERM signal
process.on('SIGTERM', () => {
    errorLogger.error('SIGTERM RECEIVED. Shutting down gracefully!')
    if(process.env.NODE_ENV !=='production') console.log('SIGTERM')
    httpServer.close(() => {
      errorLogger('Process terminated!')
    });
  });