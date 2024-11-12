import React, { useState } from 'react';
import axios from 'axios';

const BookView = () => {
    const [bookID, setBookID] = useState('');
    const [bookData, setBookData] = useState(null);

    const handleChange = (e) => {
        setBookID(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/books/${bookID}`);
            setBookData(response.data);
        } catch (error) {
            alert('Book not found');
            console.error(error);
            setBookData(null);
        }
    };

    return (
        <div className="container mt-5">
            <h2>View Book</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Book ID"
                    value={bookID}
                    onChange={handleChange}
                />
            </div>
            <button className="btn btn-primary w-100 mb-3" onClick={handleSearch}>
                View Book
            </button>

            {bookData && (
                <div className="card mt-3">
                    <div className="card-body">
                        <h5 className="card-title">Book Details</h5>
                        <p><strong>ID:</strong> {bookData.BookID}</p>
                        <p><strong>Name:</strong> {bookData.BookName}</p>
                        <p><strong>Author:</strong> {bookData.BookAuthor}</p>
                        <p><strong>Quantity:</strong> {bookData.BookQuantity}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookView;
