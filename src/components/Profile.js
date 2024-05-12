import React from 'react';

function Profile() {
  return (
    <main>
      <div className="profile-container">
        <h1>Profile Page</h1>
        <p>Welcome, [User Name]!</p>
        <div className="user-details">
          <h2>Your Details</h2>
          <p>Email: [User Email]</p>
          <p>Member since: [Join Date]</p>
        </div>
        <div className="reading-history">
          <h2>Your Reading History</h2>
          {/* Reading history items could be mapped from data here */}
        </div>
        <div className="favorites">
          <h2>Your Favorite Books</h2>
          {/* Favorite books could be listed here */}
        </div>
      </div>
    </main>
  );
}

export default Profile;
