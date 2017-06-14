import express from 'express';
import mongoose from 'mongoose';
import bookShelfFunctions from '../server/boofShelfClass.js';

let router = express.Router();

router.post('/book', (req, res) => {
    let newBook = req.body;
    bookShelfFunctions.addBook(newBook);
    res.json("Book added to shelf");
})

