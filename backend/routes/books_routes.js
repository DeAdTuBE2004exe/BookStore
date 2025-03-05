import express from "express";
import mongoose from "mongoose";
import { Book } from "../models/book_model.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publish_year
        ) {
            return res.status(400).send({ message: 'send all required fields: tutle, author, publish_year' });
        }

        const new_book = {
            title: req.body.title,
            author: req.body.author,
            publish_year: req.body.publish_year,
        };
        const book = await Book.create(new_book);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const book = await Book.findById(id);

        return res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
})

router.put('/:id', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publish_year
        ) {
            return res.status(400).send({
                message: 'send all required fiedls: title, author, publish_year'
            });
        }

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: 'book does not exist' });
        }

        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).json({ message: 'book does not exist' });
        }
        return res.status(200).send({ message: 'book updated successfully' })
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'book does not exist' })
        }
        return res.status(200).send({ message: 'book deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;