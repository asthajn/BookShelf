import _ from 'underscore';
import bookShelfData from '../models/BookShelf.js'
class boofShelfClass{

    constructor(){
        books = bookShelfData.find();
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