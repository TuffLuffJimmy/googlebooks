const { model, Schema } = require('mongoose')

const bookSchema = new Schema({
	id: String,
	title: String,
	author: [{
    type: String
  }],
	description: String,
	image: String,
	link: String,
})

module.exports = model('Book', bookSchema)