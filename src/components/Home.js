import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import bookOneImage from '../images/PopularReads/5vXvHHo.png';
import bookTwoImage from '../images/PopularReads/1646514602.jpg';
import bookThreeImage from '../images/PopularReads/81i5d0RcSjL._SL1500_.jpg';
import bookFourImage from '../images/PopularReads/HOD.png';
import bookFiveImage from '../images/PopularReads/Stoic.png';
import bookSixImage from '../images/PopularReads/VS.png';
import bookSevenImage from '../images/PopularReads/Naruto.png';
import literatureImage from '../images/PopularReads/1984.png';
import mangaImage from '../images/PopularReads/HXH.png';
import comicImage from '../images/PopularReads/Superman.png';
import upcomingBookImage1 from '../images/upcoming-releases/lovinglit.png';
import upcomingBookImage2 from '../images/upcoming-releases/RSMH.png';
import upcomingBookImage3 from '../images/upcoming-releases/COO.png';
import upcomingBookImage4 from '../images/upcoming-releases/THH.png';
import upcomingBookImage5 from '../images/upcoming-releases/booth.png';
import publishImage from '../images/publish/publish.png'; 



function Home() {
    return (
        <div className="home-container">
            <div className="header">
                <div className="logo">ComicNova</div>
                <input type="text" placeholder="Search books, authors, ISBNs..." className="search-bar" />
            </div>
            <div className="main-image"></div>
            <div className="welcome-text">Welcome to ComicNova! Your one-stop shop for comics and novels.</div>
            <div className="popular-reads">
                <h2>Popular Reads</h2>
                <div className="books-container">
                    <img src={bookOneImage} alt="Book One" className="book-image"/>
                    <img src={bookTwoImage} alt="Book Two" className="book-image"/>
                    <img src={bookThreeImage} alt="Book Three" className="book-image"/>
                    <img src={bookFourImage} alt="Book Four" className="book-image"/>
                    <img src={bookFiveImage} alt="Book Five" className="book-image"/>
                    <img src={bookSixImage} alt="Book Six" className="book-image"/>
                    <img src={bookSevenImage} alt="Book Seven" className="book-image"/>


                    {/* Additional books here */}
                </div>
                <Link to="/top-reads" className="more-books-link">Explore More</Link>
            </div>
           
        {/* New Genre Section */}
        <div className="genre-section">

  
                <h2>Explore by Genre</h2>
                <div className="genres-container">
                    <div className="genre-card">
                        <img src={literatureImage} alt="Literature" className="genre-image"/>
                        <h3>Literature</h3>
                        <Link to="/literature" className="genre-link">View Literature</Link>
                    </div>
                    <div className="genre-card">
                        <img src={mangaImage} alt="Manga" className="genre-image"/>
                        <h3>Manga</h3>
                        <Link to="/manga" className="genre-link">View Manga</Link>
                    </div>
                    <div className="genre-card">
                        <img src={comicImage} alt="Comics" className="genre-image"/>
                        <h3>Comics</h3>
                        <Link to="/comics" className="genre-link">View Comics</Link>
                    </div>
                </div>
            </div>
            <div className="upcoming-releases">
                <h2>Upcoming Releases</h2>
                <div className="books-container">
                    <img src={upcomingBookImage1} alt="Upcoming Book" className="book-image"/>
                    <img src={upcomingBookImage2} alt="Upcoming Book" className="book-image"/>
                    <img src={upcomingBookImage3} alt="Upcoming Book" className="book-image"/>
                    <img src={upcomingBookImage4} alt="Upcoming Book" className="book-image"/>
                    <img src={upcomingBookImage5} alt="Upcoming Book" className="book-image"/>

                    {/* More books */}
                </div>
            </div>

            <div className="publish-section">
                <div className="publish-content">
                    <img src={publishImage} alt="Publish your work" className="publish-image"/>
                    <div className="publish-text">
                        <h2>Publish Your Work</h2>
                        <p>Have a story to tell? Share your creative works with our community and get published!</p>
                        <Link to="/publish" className="publish-link">Start Publishing</Link>
                    </div>
                </div>
            </div>

        </div>

        
    );
}

export default Home;
