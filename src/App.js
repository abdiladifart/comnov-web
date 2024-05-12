import React from 'react';
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
import './styles.css'; // Central stylesheet for global styles

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about">About Us</Link>
          <Link to="/genres">Genres</Link>
          <Link to="/top-reads">Top Reads</Link>
          <Link to="/publish">Publish</Link>
          <Link to="/contact">Contact Us</Link>
          <div className="logo">ComicNova</div>

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/top-reads" element={<TopReads />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
