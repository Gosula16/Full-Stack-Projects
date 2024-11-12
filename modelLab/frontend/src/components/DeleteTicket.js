import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteTicket = () => {
    const { register, handleSubmit, reset } = useForm();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/tickets/${data.TicketID}`/*, { validateStatus: () => true }*/);
    
            if (response.status === 200) { // Adjust status check as needed
                alert("Ticket deleted successfully!");
                setMessage('Ticket deleted successfully!');
                setError('');
                reset();
            } else {
                setError('Unexpected response from server.');
            }
        } catch (error) {
            console.error("Error deleting ticket:", error);
            setMessage('');
            setError('Error deleting ticket. Ticket ID may not exist.');
        }
    };
    
    

    return (
        <div className="container">
            <h2 className="text-center">Delete Ticket</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="ticketId">Ticket ID</label>
                    <input
                        {...register('TicketID', { required: true })}
                        className="form-control"
                        placeholder="Enter Ticket ID to Delete"
                    />
                </div>
                <button type="submit" className="btn btn-danger mt-3">Delete Ticket</button>
            </form>
            {message && <p className="mt-3 text-center text-success">{message}</p>}
            {error && <p className="mt-3 text-center text-danger">{error}</p>}
            <button onClick={() => navigate('/')} className="btn btn-secondary mt-3">Home</button>
        </div>
    );
};

export default DeleteTicket;
