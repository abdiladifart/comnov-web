import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import bookOneImage from '../images/5vXvHHo.png';
import bookTwoImage from '../images/1646514602.jpg';
import bookThreeImage from '../images/81i5d0RcSjL._SL1500_.jpg';
import publishingImage from '../images/hand-drawn-flat-design-poetry-illustration_23-2149298506.jpg'; // Import the image for publishing section

function Home() {
  return (
    <div className="home-container">
      <div className="main-image"></div>
      <div className="welcome-text">Welcome to ComicNova! Your one-stop shop for comics and novels.</div>
      <div className="popular-reads">
        <h2>Popular Reads</h2>
        <div className="books-container">
          <img src={bookOneImage} alt="Book One" className="book-image"/>
          <img src={bookTwoImage} alt="Book Two" className="book-image"/>
          <img src={bookThreeImage} alt="Book Three" className="book-image"/>
        </div>
        <Link to="/top-reads" className="more-books-link">Explore More</Link>
      </div>
      <div className="publishing-section">
        <h2>Become a Publisher</h2>
        <p>Share your work with the world. Join our community of creators and publish your books, comics, or poems with us!</p>
        <img src={publishingImage} alt="Publishing Illustration" className="publishing-image"/>
        <Link to="/publish" className="publish-link">Start Publishing</Link>
      </div>
    </div>
  );
}

export default Home;
