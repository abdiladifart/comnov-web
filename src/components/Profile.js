import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import "../styles/profile.css"

function Profile() {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('You must be logged in to view this page.');
                return;
            }

            try {
                const response = await axios.get(`http://localhost:3370/api/users/profile`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log("Received data:", response.data);  // Ensure this includes book data
                setProfile(response.data);
            } catch (error) {
                console.error('Failed to fetch profile:', error.response ? error.response.data : 'Server Error');
                setError('Failed to fetch profile: ' + (error.response ? error.response.data.message : 'Server error'));
            }
        };

        fetchProfile();
    }, []);

    return (
        <div className="profile-container">
            <h1>Profile Page</h1>
            {profile ? (
                <div>
                    <p>Welcome, {profile.username}!</p>
                    <p>Email: {profile.email}</p>
                    <p>Member since: {new Date(profile.joinDate).toLocaleDateString()}</p>
                    <h2>Your Books Page</h2>

                    {profile.books && profile.books.length > 0 ? (
                        profile.books.map(book => (
                            <div key={book.id}>
                                <img src={`data:image/jpeg;base64,${book.cover}`} alt={book.title} style={{ width: 100 }} />
                                <h3>{book.title}</h3>
                                <p>{book.genre}</p>
                                <Link to={`/book/${book.id}`}>Read Book</Link>
                            </div>
                        ))
                    ) : (
                        <p>No books published yet.</p>
                    )}

                </div>
            ) : (
                <p>{error || "Loading profile..."}</p>
            )}
        </div>
    );
}

export default Profile;
