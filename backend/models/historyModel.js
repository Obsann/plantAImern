import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
    imageUrl: String,
    disease: String,
    advice: String,
    date: {
        type: Date,
        default: Date.now
    }});

export default mongoose.model("History", historySchema);