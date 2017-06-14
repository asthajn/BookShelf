import mongoose from 'mongoose';

let BookShelfSchema = new mongoose.Schema({
    bookId: Number,
    title: "String",
    author: "String",
    read: Boolean,
    archived: Boolean
})

let BookShelf = mongoose.model('BookShelf', BookShelfSchema);
module.exports = BookShelf;