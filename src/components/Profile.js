import React, { useState } from 'react';
import '../styles/profile.css'; // Ensure the path is correct
import lawsImage from '../images/laws.jpg';
import mastryImage from '../images/mastry.jpg';
import strategiesImage from '../images/strategies.jpg';
import bookOneImage from '../images/PopularReads/1646514602.jpg';
import bookTwoImage from '../images/PopularReads/81i5d0RcSjL._SL1500_.jpg';
import bookThreeImage from '../images/PopularReads/5vXvHHo.png';

function Profile() {
    const [profileImage, setProfileImage] = useState(''); // State to hold the profile image URL

    // Mock data for demonstration
    const readingHistory = [
        { id: 1, title: "Laws of Human Nature", imageUrl: lawsImage },
        { id: 2, title: "Mastery", imageUrl: mastryImage },
        { id: 3, title: "48 Laws of Power: Strategies", imageUrl: strategiesImage }
    ];

    const favoriteBooks = [
        { id: 1, title: "The 48 Laws of Power", imageUrl: bookOneImage },
        { id: 2, title: "The Art of War", imageUrl: bookTwoImage },
        { id: 3, title: "The 33 Strategies of War", imageUrl: bookThreeImage }
    ];

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onloadend = () => {
            setProfileImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <main>
            <div className="profile-container">
                <div className="profile-pic-container">
                    <img src={profileImage || 'default_profile_pic.jpg'} alt="Profile" className="profile-pic" />
                    <input type="file" onChange={handleImageChange} accept="image/*" />
                </div>
                <h1>Profile Page</h1>
                <p>Welcome, [User Name]!</p>
                <div className="user-details">
                    <h2>Your Details</h2>
                    <p>Email: [User Email]</p>
                    <p>Member since: [Join Date]</p>
                </div>
                <div className="reading-history">
                    <h2>Your Reading History</h2>
                    {readingHistory.map(book => (
                        <div key={book.id} className="book-card">
                            <img src={book.imageUrl} alt={book.title} />
                            <h3>{book.title}</h3>
                        </div>
                    ))}
                </div>
                <div className="favorites">
                    <h2>Your Favorite Books</h2>
                    {favoriteBooks.map(book => (
                        <div key={book.id} className="book-card">
                            <img src={book.imageUrl} alt={book.title} />
                            <h3>{book.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Profile;
