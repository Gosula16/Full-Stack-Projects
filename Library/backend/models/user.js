const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    UserID: { type: String, unique: true, required: true },
    UserName: { type: String, required: true },
    UserMail: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
