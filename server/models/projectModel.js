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
    logo:{
        required:true,
        type:{
            photo:String,
            isSymbol:Boolean
        }
    },
    technologies:{
        type: [String],
        required: Boolean,
    },
    description:{
        type:String,
        required:true,
        maxLength: [135, 'Description cannot be longer than 135 characters.']
    },
    status:{
        type:String,
        required:true
    }
})

const Project = mongoose.model('Project', projectSchema)
export default Project