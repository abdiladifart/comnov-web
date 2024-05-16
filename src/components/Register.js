import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import "../styles/register.css"


function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3370/api/users/register', { username, email, password });
      navigate('/login'); // Redirect to login after successful registration
    } catch (error) {
      console.error('Registration failed:', error.response.data);
    }
  };

  return (
      <div className="background-image-register">
        <div className="register-container">
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account.</p>
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="register-button">Register</button>
          </form>
        </div>
      </div>
  );
}

export default Register;
