import React from 'react';
import axios from 'axios';
import '../styles/publish.css';

function Publish() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Debugging FormData content
    for (let key of formData.keys()) {
      console.log(key, formData.get(key));
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('You are not logged in!');
      return;
    }

    try {
      console.log('Token:', token); // Debugging the token
      const response = await axios.post("http://localhost:3370/api/books/publish", formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Book published:', response.data);
      alert('Book published successfully!');
    } catch (error) {
      console.error('Error publishing book:', error);
      console.log('Response data:', error.response.data); // Log the response data
      alert('Error publishing book: ' + error.message);
    }
  };

  return (
      <main>
        <div className="publish-container">
          <h1>Publish Your Work</h1>
          <p>At ComicNova, we celebrate creators and encourage you to share your original books, comics, and manga with our global community. Use the form below to submit your work for review.</p>

          <form className="submission-form" onSubmit={handleSubmit}>
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

            <label htmlFor="cover">Cover Image:</label>
            <input type="file" id="cover" name="cover" required />

            <label htmlFor="content">Book File:</label>
            <input type="file" id="content" name="content" required />

            <button type="submit">Submit Work</button>
          </form>
        </div>
      </main>
  );
}

export default Publish;
