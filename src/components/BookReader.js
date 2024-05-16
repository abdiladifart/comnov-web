import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function BookReader() {
    const { id } = useParams();
    const [bookData, setBookData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookData = async () => {
            const token = localStorage.getItem('token');  // Retrieve the token from local storage
            const headers = {
                Authorization: `Bearer ${token}`  // Prepare the authorization header
            };
            try {
                const response = await axios.get(`http://localhost:3370/api/books/${id}`, { headers });
                if (response.data && response.data.content) {
                    setBookData(response.data);
                } else {
                    throw new Error('Book content is missing');
                }
            } catch (error) {
                console.error('Failed to fetch book data:', error);
                setError(error.message);
            }
        };

        fetchBookData();
    }, [id]);  // Dependency array includes id to refetch if it changes

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {bookData ? (
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
                    <Viewer fileUrl={`data:application/pdf;base64,${bookData.content}`} />
                </Worker>
            ) : (
                <p>Loading book data...</p>
            )}
        </div>
    );
}

export default BookReader;
