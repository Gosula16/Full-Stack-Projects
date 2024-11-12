import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="container text-center">
        <h1>Welcome to the Ticketing System</h1>
        <p className="lead">Manage your tickets easily with our system.</p>
        <nav className="mt-4">
            <Link to="/submit" className="btn btn-primary mx-2">Submit Ticket</Link>
            <Link to="/view" className="btn btn-secondary mx-2">View Ticket</Link>
            <Link to="/update" className="btn btn-warning mx-2">Update Ticket Status</Link>
            <Link to="/delete" className='btn btn-danger mx-2'>Delete Ticket</Link>
        </nav>
    </div>
);

export default Home;
