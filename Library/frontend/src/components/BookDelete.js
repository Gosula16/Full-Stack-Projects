import React, { useState } from 'react';
import axios from 'axios';

const BookDelete = () => {
    const [bookID, setBookID] = useState('');

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/books/${bookID}`);
            alert('Book deleted successfully');
            setBookID('');
        } catch (error) {
            alert('Error deleting book');
            console.error(error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Delete Book</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Book ID"
                    value={bookID}
                    onChange={(e) => setBookID(e.target.value)}
                />
            </div>
            <button className="btn btn-danger w-100" onClick={handleDelete}>
                Delete Book
            </button>
        </div>
    );
};

export default BookDelete;
