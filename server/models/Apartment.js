import mongoose from "mongoose";
const { Schema } = mongoose;

const ApartmentSchema = new mongoose.Schema({
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

export default mongoose.model("Apartment", ApartmentSchema);