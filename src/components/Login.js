import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css'; // Ensure the CSS path is correct

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login with:', email, password);
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
