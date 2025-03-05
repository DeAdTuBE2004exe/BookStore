import mongoose from "mongoose";

const book_schema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        author:{
            type: String,
            required: true,
        },
        publish_year:{
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('books',book_schema);