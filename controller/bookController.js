const axios = require('axios');
const database = require('../models');
require('dotenv').config();

module.exports = {
    getAllSaved: (req, res) => {
        database.Book
            .find(req.query)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    saveBook: (req, res) => {
        database.Book
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    removeSaved: (req, res) => {
        database.Book
            .findById({_id: req.params.id})
            .then(book => book.remove())
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err))
    },
    getBooks: (req, res) => {
        console.log(req.params.query);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.query}:keyes&key=${process.env.GOOGLE_API}`)
        .then(data => res.json(data.data.items))
        .catch(err => {
            console.log(err);
            res.status(422).json(err)});
    }
}