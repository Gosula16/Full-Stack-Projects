const express = require('express');
const Book = require('../models/book');
const router = express.Router();

// Register Book
router.post('/', async (req, res) => {
    const newBook = new Book(req.body);
    try {
        await newBook.save();
        res.status(201).send('Book Registered');
    } catch (error) {
        console.error('Book registration error:', error.message);
        res.status(500).send('Something went wrong');
    }
});

// Get Book
router.get('/:bookId', async (req, res) => {
    const book = await Book.findOne({ BookID: req.params.bookId });
    if (!book) return res.status(404).send('Book Not Found');
    res.status(200).json(book);
});

// Delete Book
router.delete('/:bookId', async (req, res) => {
    try {
        await Book.findOneAndDelete({ BookID: req.params.bookId });
        res.status(200).send('Book Deleted');
    } catch (error) {
        console.error(error);
        res.status(400).send('Something went wrong');
    }
});

// Update Book
router.patch('/:bookId', async (req, res) => {
    try {
        const book = await Book.findOneAndUpdate(
            { BookID: req.params.bookId },
            req.body,
            { new: true }
        );
        res.status(200).json(book);
    } catch (error) {
        console.error(error);
        res.status(404).send('Something went wrong');
    }
});

module.exports = router;
