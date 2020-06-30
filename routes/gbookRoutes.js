const router = require('express').Router()
const axios = require('axios')

router.get('/gbook/:search', (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
    .then(({ data }) => {
      res.json(data.items)
    })
    .catch(e => console.error(e))
})

module.exports = router