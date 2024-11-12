import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mt-5">
            <h2>Home</h2>
            <div className="list-group">
                
                <Link to="/register-book" className="list-group-item list-group-item-action">
                    Register Book
                </Link>
                <Link to="/view-book" className="list-group-item list-group-item-action">
                    View Book
                </Link>
                <Link to="/delete-book" className="list-group-item list-group-item-action">
                    Delete Book
                </Link>
                <Link to="/update-book" className="list-group-item list-group-item-action">
                    Update Book
                </Link>
            </div>
        </div>
    );
};

export default Home;
