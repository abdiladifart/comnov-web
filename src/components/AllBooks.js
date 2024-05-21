import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/AllBooks.css'; // Assuming you have corresponding CSS for styling

function AllBooks() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const token = localStorage.getItem('token'); // Get the token from localStorage
                const config = {
                    headers: { Authorization: `Bearer ${token}` } // Prepare the authorization header
                };
                const response = await axios.get('http://localhost:3370/api/books', config);
                setBooks(response.data);
            } catch (error) {
                setError(error.response ? error.response.data.message : 'An error occurred while fetching books');
            }
        };

        fetchBooks();
    }, []);

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="books-container">
            {books.length > 0 ? books.map(book => (
                <div key={book.id} className="book-card">
                    <Link to={`/book/${book.id}`}>
                        <img src={`data:image/jpeg;base64,${book.cover}`} alt={book.title} className="book-image"/>
                        <div className="book-info">
                            <h3>{book.title}</h3>
                            <p>{book.description}</p>
                        </div>
                    </Link>
                </div>
            )) : <p>No books found.</p>}
        </div>
    );
}

export default AllBooks;
