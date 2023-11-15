import mongoose from "mongoose";

const bookSchema = mongoose.Schema (
    {
        tittle: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },

        publishYear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Books = mongoose.model('Book', bookSchema);