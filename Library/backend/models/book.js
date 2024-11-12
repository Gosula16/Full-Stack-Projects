const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    BookID: { type: String, unique: true, required: true },
    BookName: { type: String, required: true },
    BookAuthor: { type: String, required: true },
    BookQuantity: { type: Number, required: true }
});

module.exports = mongoose.model('Book', bookSchema);
