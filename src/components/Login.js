import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/login.css"

function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = { email, password };
        try {
            const response = await axios.post('http://localhost:3370/api/users/login', payload);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('userId', response.data.userId);
            setIsLoggedIn(true);
            navigate('/profile');
        } catch (error) {
            console.error('Login failed:', error.response.data);
            alert('Login failed: ' + (error.response.data.message || 'Incorrect credentials'));
        }
    };

    return (
        <div className="background-image">
            <div className="login-container">
                <h2>Welcome Back</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit">Sign in</button>
                    <Link to="/register" className="register-link">Don’t have an account? Sign up</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
