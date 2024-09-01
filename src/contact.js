import React from 'react';

// Inline styles for the Contact component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    backgroundColor: '#f0f0f0',
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
    marginBottom: '30px',
    fontFamily: 'Arial, sans-serif',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  infoItem: {
    fontSize: '1.1rem',
    color: '#2c3e50',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    maxWidth: '600px',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    minHeight: '150px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#e74c3c',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#c0392b',
  },
};

function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.paragraph}>
        We’d love to hear from you! Whether you have questions about our services, need support, or just want to share your feedback, feel free to reach out to us. Our team is here to assist you and ensure you have the best experience possible.
      </p>
      <div style={styles.contactInfo}>
        <div style={styles.infoItem}>
          <strong>Email:</strong> support@traveladventures.com
        </div>
        <div style={styles.infoItem}>
          <strong>Phone:</strong> +1 (555) 123-4567
        </div>
      </div>
      <form style={styles.form}>
        <input type="text" placeholder="Your Name" style={styles.input} required />
        <input type="email" placeholder="Your Email" style={styles.input} required />
        <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
