import React, { useState, useEffect } from 'react';
import '../styles/topReads.css'; // Ensure the correct path to the CSS file

// Importing images
import literatureImage1 from '../images/topreads/literature/1984.png';
import literatureImage2 from '../images/topreads/literature/litimage1.png';
import literatureImage3 from '../images/topreads/literature/SF.png';
import literatureImage4 from '../images/topreads/literature/TDP.png';
import literatureImage5 from '../images/topreads/literature/PX.png';

import mangaImage1 from '../images/topreads/manga/Naruto.png';
import mangaImage2 from '../images/topreads/manga/image.png';
import mangaImage3 from '../images/topreads/manga/HXH.png';
import mangaImage4 from '../images/topreads/manga/5vXvHHo.png';
import mangaImage5 from '../images/topreads/manga/monster.png';

import comicImage1 from '../images/topreads/comic/Superman.png';
import comicImage2 from '../images/topreads/comic/XM.png';
import comicImage3 from '../images/topreads/comic/SM.png';
import comicImage4 from '../images/topreads/comic/BM.png';
import comicImage5 from '../images/topreads/comic/BP.png';



function TopReads() {
  const [activeCategory, setActiveCategory] = useState(0); // State to track the active category

  const categories = [
    {
      genre: 'Literature',
      books: [
        { title: "Mystery", img: literatureImage1 },
        { title: "Fiction", img: literatureImage2 },
        { title: "Science Fiction", img: literatureImage5},
        { title: "Fantasy", img: literatureImage4},
        { title: "History", img: literatureImage3 },
      ]
    },
    {
      genre: 'Manga',
      books: [
        { title: "Shonen", img: mangaImage1 },
        { title: "Shojo", img: mangaImage2},
        { title: "Seinen", img: mangaImage3 }, // Assuming you use the same image for example
        { title: "Action", img: mangaImage4},
        { title: "Horror", img: mangaImage5 },
      ]
    },
    {
      genre: 'Comic',
      books: [
        { title: "Superheroes", img: comicImage1 },
        { title: "Fantasy", img: comicImage2 },
        { title: "Action", img: comicImage3},
        { title: "Mystery", img: comicImage4 },
        { title: "Science Fiction", img: comicImage5 },
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prevCategory) => (prevCategory + 1) % categories.length); // Cycle through categories
    }, 5000); // Change category every 5 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="top-reads-container">
      <h1>Top Reads in {categories[activeCategory].genre}</h1>
      <div className="books-display">
        {categories[activeCategory].books.map((book, index) => (
          <div key={index} className="book-cardTP">
            <img src={book.img} alt={book.title} className="book-image" />
            <h2>{book.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopReads;
