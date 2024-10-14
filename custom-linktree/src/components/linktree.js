// src/components/Linktree.js
import React from 'react';

const Linktree = () => {
  const links = [
    { title: 'Link 1', url: 'https://example.com', thumbnail: '/images/thumbnail1.jpg' },
    { title: 'Link 2', url: 'https://example.com', thumbnail: '/images/thumbnail2.jpg' },
    { title: 'Link 3', url: 'https://example.com', thumbnail: '/images/thumbnail3.jpg' }
  ];

  return (
    <div style={styles.container}>
      <h1>Your Name or Brand</h1>
      {links.map((link, index) => (
        <div key={index} style={styles.linkContainer}>
          <img src={link.thumbnail} alt={link.title} style={styles.thumbnail} />
          <a href={link.url} style={styles.link}>{link.title}</a>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  thumbnail: {
    width: '50px',
    height: '50px',
    marginRight: '15px',
  },
  link: {
    fontSize: '18px',
    color: '#00adb5',
    textDecoration: 'none',
  },
};

export default Linktree;
