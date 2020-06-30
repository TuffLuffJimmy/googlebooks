const router = require('express').Router()
const { Book } = require('../models')

router.get('/books', (req, res) => {
  Book.find()
		.then(books => res.json(books))
		.catch((e) => console.error(e))
})

router.get('/books/:id', (req, res) => {
  Book.find(req.params.id)
    .then()
    .catch(e => console.error(e))
})

router.post('/books', (req, res) => {
  Book.create(req.body)
    .then(book => res.json(book))
    .catch(e => console.error(e))
})

router.put('/books', (req, res) => {})

router.delete('/books/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

module.exports = router
