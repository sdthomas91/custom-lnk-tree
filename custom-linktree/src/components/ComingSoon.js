import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpg'; // Make sure the path is correct for your project

const ComingSoon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyle = {
    fontFamily: "'Josefin Sans', sans-serif", 
    fontWeight: '500',
    textDecoration: isHovered ? 'underline' : 'none', // Underline on hover
    fontSize: '18px',
    color: isHovered ? '#B4E7C1' : '#46664D', // Lighter green on hover
    marginTop: '20px',
    cursor: 'pointer', // To show it's clickable
    transition: 'color 0.3s ease', // Smooth transition effect
  };

  return (
    <div style={styles.container}>
      {/* Hero Image */}
      <img src={heroImage} alt="Hero" style={styles.heroImage} />

      {/* Coming Soon Text */}
      <h1 style={styles.title}>Website Coming Soon</h1>
      <p style={styles.bodyText}>We're working hard to launch our new website. Stay tuned!</p>

      {/* Link to Linktree */}
      <Link 
        to="/links" 
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}  // Hover starts
        onMouseLeave={() => setIsHovered(false)} // Hover ends
      >
        Visit our Linktree
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '20px',
  },
  heroImage: {
    width: '80%', 
    maxWidth: '600px',
    marginBottom: '20px',
  },
  title: {
    fontFamily: "'Josefin Sans', sans-serif",
    fontWeight: '600',
    fontSize: '36px', 
    margin: '10px 0',
  },
  bodyText: {
    fontFamily: "'Josefin Sans', sans-serif",
    fontWeight: '300', 
    fontSize: '18px',
    margin: '10px 0',
  },
};

export default ComingSoon;
