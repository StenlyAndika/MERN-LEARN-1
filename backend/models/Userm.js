import mongoose from "mongoose";

const User = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    nohp: {
        type: String
    }
});

export default mongoose.model('Users', User);