const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String
    },
    authors: [{
        type: String
    }],
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

const Book = Mongoose.model('Book', bookSchema);

module.exports = Book;