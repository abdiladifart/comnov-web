import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/GenreBooks.css'; // Import the CSS file

function GenreBooks() {
    const { genre } = useParams();
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:3370/api/books/genre/${genre}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setBooks(response.data);
            } catch (error) {
                setError(error.response ? error.response.data : 'An error occurred');
            }
        };

        fetchBooks();
    }, [genre]);

    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    return (
        <div>
            <h1 className="genre-title">{genre} Books</h1>
            {books.length > 0 ? (
                <div className="books-container">
                    {books.map((book) => (
                        <div key={book.id} className="book-card">
                            <img src={`data:image/jpeg;base64,${book.cover}`} alt={book.title} />
                            <div className="book-details">
                                <h3>{book.title}</h3>
                                <p>{book.description}</p>
                                <Link to={`/book/${book.id}`}>Read Book</Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No books found in this genre.</p>
            )}
        </div>
    );
}

export default GenreBooks;
