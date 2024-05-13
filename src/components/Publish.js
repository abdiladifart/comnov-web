import React from 'react';
import '../styles/publish.css'; // Ensure the CSS path is correct

function Publish() {
  return (
    <main>
      <div className="publish-container">
        <h1>Publish Your Work</h1>
        <p>At ComicNova, we celebrate creators and encourage you to share your original books, comics, and manga with our global community. Use the form below to submit your work for review.</p>
        
        <form className="submission-form">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" placeholder="Enter the title of your work" required />
          
          <label htmlFor="genre">Genre:</label>
          <select id="genre" name="genre" required>
            <option value="">Select Genre</option>
            <option value="fiction">Fiction</option>
            <option value="mystery">Mystery</option>
            <option value="sci-fi">Science Fiction</option>
            <option value="fantasy">Fantasy</option>
            <option value="manga">Manga</option>
            <option value="comic">Comic</option>
            {/* Additional genres can be added here */}
          </select>
          
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" placeholder="Describe your work" required></textarea>
          
          <label htmlFor="file">Upload File:</label>
          <input type="file" id="file" name="file" required />
          
          <button type="submit">Submit Work</button>
        </form>
      </div>
    </main>
  );
}

export default Publish;
  