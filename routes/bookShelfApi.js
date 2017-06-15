import express from 'express';
import mongoose from 'mongoose';
import bookShelfClass from '../server/bookShelfClass.js';

let router = express.Router();

router.post('/book', (req, res) => {
    let newBook = req.body;
    bookShelfClass.addBook(newBook);
    res.json("Book added to shelf");
})
module.exports = router;

