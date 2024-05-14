import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import About from './components/About';
import Genres from './components/Genres';
import TopReads from './components/TopReads';
import Publish from './components/Publish';
import Contact from './components/Contact';
import './styles.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    // navigate to home or login page after logout
  };

  return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            {!isLoggedIn ? (
                <Link to="/login">Login</Link>
            ) : (
                <>
                  <Link to="/profile">Profile</Link>
                  <button onClick={handleLogout}>Logout</button>
                </>
            )}
            <Link to="/register">Register</Link>
            <Link to="/about">About Us</Link>
            <Link to="/genres">Genres</Link>
            <Link to="/top-reads">Top Reads</Link>
            <Link to="/publish">Publish</Link>
            <Link to="/contact">Contact Us</Link>
            <div className="logo">ComicNova</div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/top-reads" element={<TopReads />} />
            <Route path="/publish" element={<Publish />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <footer>
            © 2024 ComicNova. All rights reserved.
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </footer>
        </div>
      </Router>
  );
}

export default App;
