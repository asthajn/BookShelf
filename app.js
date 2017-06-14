import path from 'path';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import express from 'express';
import mongoose from 'mongoose';
import api from './routes/bookShelfApi';

let app = express();

app.use('/api', api);
app.use(bodyParser());
app.use(express.static('.'));
console.log("In app.js");

/* Connecting to MongoDB using Mongoose */
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/BookShelf')
// .then(() => {
//     console.log("connection to MongoDB successful");
// }).catch((err) => {
//     console.log("Error connecting to MongoDB: ", err);
// })

/* Starting the server */
app.get('/', function (request, response) {
    response.sendfile('index.html');
});
let port = 3333;
app.listen(3333, () => {
   // let host = server.address().address;
    console.log("BookShelf app listening at http://localhost/%s", port);
})

module.exports = app;