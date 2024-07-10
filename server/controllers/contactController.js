import Email  from "../utils/email.js";
import catchAsync from "../utils/catchAsync.js";


export const sendMessage = catchAsync(async(req, res, next)=>{
    const {email, name, message} = req.body
    await new Email(name, email, message).sendMessage()
    res.status(200).json({
        status:'success'
    })
})