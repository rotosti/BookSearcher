const database = require('../models');

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
    }
}