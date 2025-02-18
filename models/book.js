import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    auteur: { type: String, required: true },
    description: { type: String },
    format: { 
        type: String, 
        enum: ["poche", "manga", "audio"], 
        default: "poche" 
    }
});

export const Book = mongoose.model("Book", bookSchema);