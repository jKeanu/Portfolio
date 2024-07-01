import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true
    },
    startDate:{
        type:Date,
        required: true
    },
    endDate:{
        type:Date,
        required: true
    },
    icon:{
        type: String,
        required: true
    },
    photos:{
        type:[String],
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