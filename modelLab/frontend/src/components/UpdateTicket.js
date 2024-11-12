import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateTicket = () => {
    const { register, handleSubmit, reset } = useForm();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await axios.patch(`http://localhost:5000/api/tickets/${data.TicketID}`, { Status: data.Status });
            setMessage('Ticket status updated successfully!');
            reset();
        } catch (error) {
            setMessage('Error updating ticket status.');
            alert("Ticket Id not found.");
            reset();
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">Update Ticket Status</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Ticket ID</label>
                    <input
                        {...register('TicketID', { required: true })}
                        className="form-control"
                        placeholder="Enter Ticket ID"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Status</label>
                    <select {...register('Status')} className="form-control">
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Update Ticket Status</button>
                {message && <p className="mt-3 text-center text-success">{message}</p>}
                <button onClick={() => navigate('/')} className="btn btn-secondary mt-3">Home</button>
            </form>
        </div>
    );
};

export default UpdateTicket;
