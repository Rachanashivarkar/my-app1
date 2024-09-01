import React from 'react';
import { Link } from 'react-router-dom';

// Inline styles for the NavBar component
const styles = {
  nav: {
    backgroundColor: '#2c3e50',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  li: {
    margin: '0 15px',
  },
  link: {
    textDecoration: 'none',
    color: '#ecf0f1',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#f39c12',
  },
};

function NavBar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link} activeStyle={styles.linkHover}>
            Home
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/about" style={styles.link} activeStyle={styles.linkHover}>
            About
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/contact" style={styles.link} activeStyle={styles.linkHover}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
