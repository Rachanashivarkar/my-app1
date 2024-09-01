import React from 'react';

// Inline styles for the About component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    backgroundColor: '#fafafa',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  paragraph: {
    fontSize: '1.25rem',
    color: '#34495e',
    textAlign: 'center',
    maxWidth: '800px',
    lineHeight: '1.6',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  highlight: {
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  image: {
    borderRadius: '10px',
    marginTop: '20px',
    width: '100%',
    maxWidth: '600px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to <span style={styles.highlight}>Travel Adventures</span>! We are a passionate team dedicated to helping you uncover the most stunning and unique travel destinations around the world. Our goal is to make your travel dreams come true by providing personalized experiences and expert guidance.
        <br /><br />
        Whether you're looking for a relaxing beach escape, an exhilarating adventure, or a deep dive into rich cultural experiences, we offer tailored travel solutions just for you. Our team of travel enthusiasts curates every journey with attention to detail and a commitment to quality.
        <br /><br />
        Join us and let us take you on a journey of a lifetime. Explore, discover, and make unforgettable memories with <span style={styles.highlight}>Travel Adventures</span>.
      </p>
      <img src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Travel-Download-Free-Images-HD.jpg" alt="Travel Experiences" style={styles.image} />
    </div>
  );
}

export default About;
