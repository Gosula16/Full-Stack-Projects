import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [formData, setFormData] = useState({ UserID: '', UserName: '', UserMail: '' });
    const [isRegister, setIsRegister] = useState(true);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isRegister) {
                await axios.post('http://localhost:5000/users', formData);
                alert('User Registered');
            } else {
                const response = await axios.get(`http://localhost:5000/users/${formData.UserID}`);
                if (response.data) {
                    alert('Login Successful');
                    navigate('/home');
                }
            }
        } catch (error) {
            console.log(formData);
            alert('Something went wrong');
            console.error(error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>{isRegister ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="User ID"
                        name="UserID"
                        value={formData.UserID}
                        onChange={handleChange}
                        required
                    />
                </div>
                {isRegister && (
                    <>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="User Name"
                                name="UserName"
                                value={formData.UserName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="User Email"
                                name="UserMail"
                                value={formData.UserMail}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </>
                )}
                <button type="submit" className="btn btn-primary w-100">
                    {isRegister ? 'Register' : 'Login'}
                </button>
                <button
                    type="button"
                    className="btn btn-link w-100 mt-2"
                    onClick={() => setIsRegister(!isRegister)}
                >
                    {isRegister ? 'Already registered? Login' : 'New user? Register'}
                </button>
            </form>
        </div>
    );
};

export default Login;
