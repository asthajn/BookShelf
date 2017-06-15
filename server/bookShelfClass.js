import _ from 'underscore';
import bookShelfData from '../models/BookShelf.js'

class bookShelfClass{
    constructor(){
        console.log("In bookshelf constructor");
        books = bookShelfData.find();
        console.log("books: ", books);
    }
    addBook = (newBook) => {
        let lastBookId = _.max(books, (book) =>{
            return book.bookid;
        })

        newBook.bookId = lastBook.bookId + 1;
        newBook.read = false;
        newBook.archived = false;
        bookShelfData.insert(newBook);

    }
}

module.exports = bookShelfClass;