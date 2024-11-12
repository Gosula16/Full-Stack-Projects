const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    TicketID: { type: String, unique: true },
    CustomerName: String,
    IssueDescription: String,
    Status: { type: String, enum: ['open', 'closed'], default: 'open' },
    CreatedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);
