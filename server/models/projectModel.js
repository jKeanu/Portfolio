import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },
    dateCreated:{
        type:Date,
        required:true,
        default:Date.now
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
        required:true
    }
})

const Project = mongoose.model('Project', projectSchema)

export default Project