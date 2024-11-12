import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import BookRegister from './components/BookRegister';
import BookView from './components/BookView';
import BookDelete from './components/BookDelete';
import BookUpdate from './components/BookUpdate';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register-book" element={<BookRegister />} />
                <Route path="/view-book" element={<BookView />} />
                <Route path="/delete-book" element={<BookDelete />} />
                <Route path="/update-book" element={<BookUpdate />} />
            </Routes>
        </Router>
    );
}

export default App;
