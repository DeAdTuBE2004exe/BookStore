import express from 'express';
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose';
import { Book } from './models/book_model.js';
import books_routes from './routes/books_routes.js'
import cors from 'cors'

const app = express();

app.use(cors()); // option 1: allow all origin with default cors (*)

// option 2
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowHeaders: ['Content-Type']
//     })
// )

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send("WELCOME TO MERN STACK");
})

app.use('/books',books_routes);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('app connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error)
    }); 