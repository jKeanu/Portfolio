import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },
    projectLink:{
        type:String,
        required:true,
        unique: true
    },
    photo:{
        type: String,
        required: true
    },
    technologies:{
        type: [String],
        required: true,
    },
    description:{
        type:String,
        required:true,
        maxLength: [135, 'Description cannot be longer than 135 characters.']
    }
})

const Project = mongoose.model('Project', projectSchema)
export default Project