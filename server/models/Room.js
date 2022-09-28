import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    roomNumber: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

export default mongoose.model("Room", RoomSchema);