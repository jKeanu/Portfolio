import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config.js';
// Load environment variables from config.env file
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import compression from 'compression';
import projectRouter from './routes/projectRoutes.js';
import contactRouter from './routes/contactRoutes.js';
import profileRouter from './routes/profileRoutes.js'
import globalHandleError from './controllers/errorController.js';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();

app.set('trust proxy', 1);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(path.join(__dirname, 'public')));

const corsOptions = {
    origin:
        process.env.NODE_ENV === 'production'
            ? [process.env.CLIENT_URL_PROD, process.env.SUB_CLIENT_URL_PROD]
            : process.env.CLIENT_URL_DEV,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// Set Security HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        baseUri: ["'self'"],
        fontSrc: ["'self'", 'https:', 'data:'],
        formAction: ["'self'"],
        frameAncestors: ["'self'"],
        imgSrc: ["'self'", 'data:'],
        objectSrc: ["'none'"],
        scriptSrc: ["'self'"],
        scriptSrcAttr: ["'none'"],
        styleSrc: ["'self'", 'https:'],
        requireTrustedTypesFor: ['script', 'style'],
      },
    },
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    permittedCrossDomainPolicies: { permittedPolicies: 'none' },
    xssFilter: true,
  }),
);

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Data sanitization against NoSQL query
app.use(mongoSanitize());

app.use(compression());

app.use('/my/info', profileRouter)
app.use('/my/projects', projectRouter);
app.use('/contact', contactRouter);

app.use(globalHandleError);

export default app;
