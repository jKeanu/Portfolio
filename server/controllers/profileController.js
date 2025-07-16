import CLOUDFRONT_DOMAIN_NAME from "../constants/cloudfront.js"
import Profile from "../models/profileModel.js"
import catchAsync from "../utils/catchAsync.js"

export const getMyInfo = catchAsync(async (req, res, _next)=>{
    const myInfo = await Profile.findOne({}).lean()
    myInfo.image = `${CLOUDFRONT_DOMAIN_NAME}/${myInfo.image}`
    return res.status(200).json({
        status: "success",
        details: myInfo
    })
})