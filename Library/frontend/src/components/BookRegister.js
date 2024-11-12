import React, { useState } from 'react';
import axios from 'axios';

const BookRegister = () => {
    const [bookData, setBookData] = useState({
        BookID: '',
        BookName: '',
        BookAuthor: '',
        BookQuantity: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({ ...bookData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/books', bookData);
            alert('Book Registered');
            setBookData({ BookID: '', BookName: '', BookAuthor: '', BookQuantity: 0 });
        } catch (error) {
            alert('Error registering book');
            console.error(error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Register Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Book ID</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Book ID"
                        name="BookID"
                        value={bookData.BookID}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Book Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Name"
                        name="BookName"
                        value={bookData.BookName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Book Author</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Book Author"
                        name="BookAuthor"
                        value={bookData.BookAuthor}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Book Quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Book Quantity"
                        name="BookQuantity"
                        value={bookData.BookQuantity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register Book</button>
            </form>
        </div>
    );
};

export default BookRegister;
