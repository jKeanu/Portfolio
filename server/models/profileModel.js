import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
        unique: true,
    },
    skills: {
        type: [String],
        required: true,
    },
    tools: {
        type: [String],
        required: true,
    },
    information: {
        type: String,
        required: true,
    }
});

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;
