import React from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../hooks/useBooks';

function BookList() {
  const { books, loading, error } = useBooks();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books!</p>;

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <Link to={`/book/${book.id}`}>{book.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
