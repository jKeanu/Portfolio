import Project from "../models/projectModel";
import catchAsync from "../utils/catchAsync";

export const getFirstThree = catchAsync(async (req, res, next)=>{
    const projects = await Project.find({})
        .sort({ dateCreated: -1 }) // Sorting by dateCreated in descending order
        .limit(6); // Limiting the results to the first 6 documents
    res.status(200).json({
        status:'success',
        data: projects
    });
})

export const getProjects = catchAsync(async (req, res, next)=>{
    const projects = await Project.find({})
        .sort({ dateCreated: -1 }) // Sorting by dateCreated in descending order
    res.status(200).json({
        status:'success',
        data: projects
    });
})