import React from 'react';
import '../styles/about.css';
import teamPhoto from '../images/8716290 copy.jpg'; // Ensure the image path is correct

function About() {
  return (
    <main>
      <div className="about-us-container">
        <img src={teamPhoto} alt="Our Team" className="about-us-image"/>
        <div className="about-us-text">
          <h1>Meet Our Professional Team</h1>
          <p>ComicNova is your premier online destination for exploring and enjoying a diverse world of digital reading. We cater to book enthusiasts, manga lovers, and comic book fans alike, offering a vast library in each category.</p>
          <p>At ComicNova, we believe in the transformative power of reading and the creative spirit of our community. Join us on this exciting journey to discover new stories, revisit old favorites, and showcase your creativity to a global audience.</p>
          <button className="read-more-button">Read More</button>
        </div>
      </div>
    </main>
  );
}

export default About;
