import express from 'express'
import rateLimit from 'express-rate-limit';
import * as projectController from '../controllers/projectController'


const router = express.Router()

const fetchProjectsLimiter = rateLimit({
    limit:50,
    windowMs:60*1000*60*6,
    message: 'Too many requests, please try again later.'
})


router.get('/latest',
    fetchProjectsLimiter,
    projectController.getFirstSix
)

router.get('/', 
    fetchProjectsLimiter,
    projectController.getProjects)



export default router