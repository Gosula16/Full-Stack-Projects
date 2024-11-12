import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SubmitTicket = () => {
    const { register, handleSubmit,reset } = useForm();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await axios.post('http://localhost:5000/api/tickets', data); 
            setMessage('Ticket submitted successfully!');
            alert("Ticket Submitted Succesfully...");
            reset();
        } catch (error) {
            setMessage('Error submitting ticket.');
            console.error("Error fetching ticket:", error);
            alert("Ticket Id is not unique.");
            reset();
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">Submit a Ticket</h2>
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
                    <label>Customer Name</label>
                    <input
                        {...register('CustomerName', { required: true })}
                        className="form-control"
                        placeholder="Enter Your Name"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Issue Description</label>
                    <textarea
                        {...register('IssueDescription', { required: true })}
                        className="form-control"
                        placeholder="Enter Issue Description"
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-success mt-3">Submit</button>
                {message && <p className="mt-3 text-center text-success">{message}</p>}
                <button onClick={() => navigate('/')} className="btn btn-secondary mt-3">Home</button>
            </form>
        </div>
    );
};

export default SubmitTicket;
