const express = require('express');
const Ticket = require('../models/Ticket');
const router = express.Router();

// Submit a Ticket
router.post('/', async (req, res) => {
    const ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.status(201).send(ticket);
    } catch (error) {
        res.status(400).send('Error with Submitting the ticket.');
    }
});

// View Ticket by TicketID
router.get('/:ticketId', async (req, res) => {
    const ticket = await Ticket.findOne({ TicketID: req.params.ticketId });
    if (!ticket) return res.status(404).send('Ticket not found.');
    res.send(ticket);
});

// Update Ticket Status
router.patch('/:ticketId', async (req, res) => {
    const ticket = await Ticket.findOneAndUpdate(
        { TicketID: req.params.ticketId },
        { Status: req.body.Status },
        { new: true }
    );
    if (!ticket) return res.status(404).send('Ticket not found.');
    res.send(ticket);
});

// Delete Ticket
router.delete('/:ticketId', async (req, res) => {
    try {
        const ticket = await Ticket.findOneAndDelete({ TicketID: req.params.ticketId });
        if (!ticket) return res.status(404).json({ message: "Ticket Not Found" });
        res.status(200).json({ message: "Ticket Deleted Successfully" });
    } catch (error) {
        console.error("Error deleting ticket:", error);
        res.status(500).json({ message: "An error occurred while deleting the ticket" });
    }
});

module.exports = router;