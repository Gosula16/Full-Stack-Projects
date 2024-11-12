const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Register User
router.post('/', async (req, res) => {
    const newUser = new User(req.body);
    try {
        await newUser.save();
        res.status(201).send('User Registered');
    } catch (error) {
        console.error('Registration error:', error.message);
        res.status(500).send('Something went wrong');
    }
});

// Get User
router.get('/:userId', async (req, res) => {
    const user = await User.findOne({ UserID: req.params.userId });
    if (!user) return res.status(404).send('User Not Found');
    res.status(200).send('User exists');
});

// Delete User
router.delete('/:userId', async (req, res) => {
    try {
        await User.findOneAndDelete({ UserID: req.params.userId });
        res.status(200).send('User Deleted');
    } catch (error) {
        console.error(error);
        res.status(400).send('Something went wrong');
    }
});

module.exports = router;
