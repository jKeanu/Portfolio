import Project from "../models/projectModel.js";
import catchAsync from "../utils/catchAsync.js";

export const getFirstSix = catchAsync(async (req, res, next)=>{
    const projects = await Project.find({})
        .sort({ dateCreated: -1 }) // Sorting by dateCreated in descending order
        .limit(6); // Limiting the results to the first 6 documents
    console.log(projects, '---')
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

export const createProject = catchAsync()