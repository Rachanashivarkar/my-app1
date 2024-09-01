import React from 'react';

// Inline styles for the Home component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff',
    padding: '20px',
  },
  heading: {
    fontSize: '3rem',
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
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    margin: '10px',
    transition: 'background-color 0.3s',
  },
  buttonSecondary: {
    backgroundColor: '#2ecc71',
  },
  buttonHover: {
    backgroundColor: '#2980b9',
  },
};

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Travel Website</h1>
      <p style={styles.paragraph}>
        Discover the world with us! Our website offers a curated selection of the best travel destinations and experiences. Whether you're looking for a relaxing beach vacation, an adventurous trek, or a cultural city tour, we've got something for every traveler.
        <br /><br />
        Explore our site to find amazing travel deals, helpful tips, and inspiring stories. Plan your next adventure with confidence and excitement.
      </p>
      <div>
        <a href="/destinations" style={{ ...styles.button, ...styles.buttonSecondary }} onMouseOver={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = styles.buttonSecondary.backgroundColor}>Explore Destinations</a>
        <a href="/contact" style={styles.button} onMouseOver={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}>Contact Us</a>
      </div>
    </div>
  );
}

export default Home;
