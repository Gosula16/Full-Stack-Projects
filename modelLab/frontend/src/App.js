import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubmitTicket from './components/SubmitTicket';
import ViewTicket from './components/ViewTicket';
import UpdateTicket from './components/UpdateTicket';
import Home from './components/Home';
import DeleteTicket from './components/DeleteTicket';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <Router>
        <div className="container">
            <Routes>
                <Route path="/submit" element={<SubmitTicket />} />
                <Route path="/view" element={<ViewTicket />} />
                <Route path="/update" element={<UpdateTicket />} />
                <Route path="/delete" element={<DeleteTicket />} />     
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    </Router>
);

export default App;
