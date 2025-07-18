import express from 'express';
import rateLimit from 'express-rate-limit';
import {getFirstSix} from '../controllers/projectController.js';

const router = express.Router();

const fetchProjectsLimiter = rateLimit({
  limit: 50,
  windowMs: 60 * 1000 * 60 * 6,
  message: 'Too many requests, please try again later.',
});

router.get('/latest', fetchProjectsLimiter, getFirstSix);

export default router;
