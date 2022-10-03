import mongoose from "mongoose";
const { Schema } = mongoose;

const BuildingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    rooms: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Apartment',
            },
        ]
    }
});

export default mongoose.model("Building", BuildingSchema);