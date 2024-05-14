import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReadingPage({ match }) {
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            const response = await axios.get(`http://localhost:3370/api/books/${match.params.bookId}`);
            setBook(response.data);
        };

        fetchBook();
    }, [match.params.bookId]);

    return (
        <div>
            {book ? (
                <div>
                    <h1>{book.title}</h1>
                    <img src={`data:image/jpeg;base64,${book.cover}`} alt={book.title} />
                    <p>{book.description}</p>
                    <div>
                        <iframe
                            src={`data:application/pdf;base64,${btoa(
                                new Uint8Array(book.content)
                                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
                            )}`}
                            width="100%"
                            height="600px">
                        </iframe>
                    </div>
                </div>
            ) : <p>Loading...</p>}
        </div>
    );
}

export default ReadingPage;
