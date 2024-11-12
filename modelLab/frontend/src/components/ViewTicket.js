import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewTicket = () => {
    const [ticket, setTicket] = useState(null);
    const [ticketId, setTicketId] = useState('');
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/tickets/${ticketId}`);
            setTicket(response.data);
        } catch (error) {
            console.error("Error fetching ticket:", error);
            setTicket(null);
            alert("Ticket not found or an error occurred.");
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">View Ticket</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Ticket ID</label>
                    <input
                        {...register('ticketId')}
                        value={ticketId}
                        onChange={e => setTicketId(e.target.value)}
                        className="form-control"
                        placeholder="Enter Ticket ID"
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">View Ticket</button>
            </form>

            {ticket && (
                <div className="mt-4">
                    <h3>Ticket Details:</h3>
                    <div className="card">
                        <div className="card-body">
                            <p><strong>Customer:</strong> {ticket.CustomerName}</p>
                            <p><strong>Issue:</strong> {ticket.IssueDescription}</p>
                            <p><strong>Status:</strong> {ticket.Status}</p>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={() => navigate('/')} className="btn btn-secondary mt-3">Home</button>
        </div>
    );
};

export default ViewTicket;
