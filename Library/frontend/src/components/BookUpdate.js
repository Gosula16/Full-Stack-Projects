import React, { useState } from 'react';
import axios from 'axios';

const BookUpdate = () => {
    const [bookID, setBookID] = useState('');
    const [bookData, setBookData] = useState({
        BookName: '',
        BookAuthor: '',
        BookQuantity: ''
    });

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/books/${bookID}`);
            setBookData({
                BookName: response.data.BookName,
                BookAuthor: response.data.BookAuthor,
                BookQuantity: response.data.BookQuantity
            });
        } catch (error) {
            alert('Book not found');
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({ ...bookData, [name]: value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`/books/${bookID}`, bookData);
            alert('Book updated successfully');
        } catch (error) {
            alert('Error updating book');
            console.error(error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Update Book</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Book ID"
                    value={bookID}
                    onChange={(e) => setBookID(e.target.value)}
                />
            </div>
            <button className="btn btn-primary w-100 mb-3" onClick={handleSearch}>
                Fetch Book Details
            </button>

            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">Book Name</label>
                    <input
                        type="text"
                        className="form-control"
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
                        name="BookQuantity"
                        value={bookData.BookQuantity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Update Book
                </button>
            </form>
        </div>
    );
};

export default BookUpdate;
