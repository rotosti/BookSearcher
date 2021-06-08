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
    saveBook: ({body}, res) => {
        database.Book
            .create({
                title:body.volumeInfo.title,
                authors:body.volumeInfo.authors,
                description:body.volumeInfo.description,
                image:body.volumeInfo.imageLinks.thumbnail,
                link:body.volumeInfo.infoLink
            })
            .then(data => {
                res.json(data)})
            .catch(err => {
                res.status(422).json(err)})
    },
    removeSaved: (req, res) => {
        database.Book
            .findById({_id: req.params.id})
            .then(book => book.remove())
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err))
    },
    getBooks: (req, res) => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.query}:keyes&key=${process.env.GOOGLE_API}`)
        .then(data => {
            res.json(data.data.items)})
        .catch(err => {
            res.status(422).json(err)});
    }
}