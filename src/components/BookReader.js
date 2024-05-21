import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '../styles/BookReader.css'; // Ensure this path is correct

function BookReader() {
    const { id } = useParams();
    const [bookData, setBookData] = useState(null);
    const [error, setError] = useState(null);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    useEffect(() => {
        const fetchBookData = async () => {
            const token = localStorage.getItem('token');
            const headers = { Authorization: `Bearer ${token}` };
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
    }, [id]);

    if (error) {
        return <div className="book-reader-error">Error: {error}</div>;
    }

    return (
        <div className="book-reader-container">
            {bookData ? (
                <>
                    <div className="book-info">
                        <img src={`data:image/jpeg;base64,${bookData.cover}`} alt={bookData.title} className="book-cover"/>
                        <div className="book-details">
                            <h2>{bookData.title}</h2>
                            <p>{bookData.description}</p>
                        </div>
                    </div>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
                        <Viewer
                            fileUrl={`data:application/pdf;base64,${bookData.content}`}
                            plugins={[defaultLayoutPluginInstance]}
                            defaultScale={SpecialZoomLevel.PageFit}
                        />
                    </Worker>
                </>
            ) : (
                <p>Loading book data...</p>
            )}
        </div>
    );
}

export default BookReader;
