import express from 'express'
import rateLimit from 'express-rate-limit';
import * as contactController from '../controllers/contactController.js'

const router = express.Router()

const sendMessageLimiter = rateLimit({
    limit:2,
    windowMs:60*1000*60*12,
    message: 'Too many requests, please try again later.'
})

router.post('/', sendMessageLimiter, contactController.sendMessage)

export default router