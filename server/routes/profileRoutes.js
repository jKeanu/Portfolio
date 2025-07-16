import express from 'express';
import rateLimit from 'express-rate-limit';
import { getMyInfo } from '../controllers/profileController.js';

const router = express.Router();

const fetchMyInfoLimiter = rateLimit({
  limit: 50,
  windowMs: 60 * 1000 * 60 * 6,
  message: 'Too many requests, please try again later.',
});

router.get('/', fetchMyInfoLimiter, getMyInfo);

export default router;
