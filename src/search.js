import React from 'react';
import Nav from "./nav";

const containerStyle = {
  padding: '40px',
  maxWidth: '800px',
  margin: '0 auto',
  backgroundColor: '#f4f4f4',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const headlineStyle = {
  fontSize: '32px',
  marginBottom: '20px',
  color: '#333',
};

const paragraphStyle = {
  fontSize: '18px',
  lineHeight: '1.6',
  color: '#555',
  marginBottom: '30px',
};

const inputStyle = {
  padding: '10px',
  width: '80%',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
  marginBottom: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#FF9800',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
};

function Search() {
  return (
    <div>
      <Nav />
      <div style={containerStyle}>
        <h2 style={headlineStyle}>Search for Your Next Adventure</h2>
        <p style={paragraphStyle}>
          Enter a destination, activity, or experience you're looking for. Our advanced search will help you discover the best options tailored to your preferences.
        </p>
        <input type="text" placeholder="Search..." style={inputStyle} />
        <br />
        <button style={buttonStyle}>Search</button>
      </div>
    </div>
  );
}

export default Search;
