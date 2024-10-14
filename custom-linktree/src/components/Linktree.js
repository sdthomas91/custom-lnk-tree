// src/components/Linktree.js
import React from 'react';
import instagramIcon from '../assets/instagram.svg';
import tiktokIcon from '../assets/tiktok.svg';
import youtubeIcon from '../assets/youtube.svg';
import emailIcon from '../assets/email.svg';
import heroImage from '../assets/hero.jpg';

const Linktree = () => {
  const links = [
    { title: 'Why we left the UK!', url: 'https://www.tiktok.com/@theunconventionalfam/video/7425558331663715617', thumbnail: '/images/thumbnail-latest.png' },
    { title: '@theunconventionalfam', url: 'https://www.tiktok.com/@theunconventionalfam', icon: tiktokIcon },
    { title: '@theunconventionalfamily_', url: 'http://instagram.com/theunconventionalfamily_', icon: instagramIcon },
    { title: 'The Unconventional Family', url: 'https://www.youtube.com/@Theunconventionalfamily', icon: youtubeIcon },
    { title: 'info@unconventionalfam.com', url: 'mailto:info@unconventionalfam.com', icon: emailIcon }
  ];

  const latestVideo = {
    title: 'Latest Update',
    url: 'https://www.tiktok.com/@theunconventionalfam/video/7425558331663715617',
  };

  return (
    <div style={styles.container}>
      <img src={heroImage} alt="Hero" style={styles.heroImage} />

      {/* Latest Video Section */}
      <div style={styles.latestBlock}>
        <div style={styles.linkContainer}>
          <p style={styles.latestVideo}>
            <a href={latestVideo.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
              {latestVideo.title}
            </a>
          </p>
        </div>
        <div style={styles.linkContainer}>
          <img src="/images/thumbnail-latest.png" alt="Why we left the UK" style={styles.icon} />
          <a href="https://www.tiktok.com/@theunconventionalfam/video/7425558331663715617" target="_blank" rel="noopener noreferrer" style={styles.link}>
            Why we left the UK!
          </a>
        </div>
      </div>

      {/* Social Links */}
      {links.map((link, index) => (
        <div key={index} style={styles.linkContainer}>
          {link.thumbnail && <img src={link.thumbnail} alt={link.title} style={styles.icon} />}  {/* Render thumbnail if present */}
          {!link.thumbnail && link.icon && <img src={link.icon} alt={link.title} style={styles.icon} />} {/* Render icon if no thumbnail */}
          <a href={link.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
            {link.title}
          </a>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '3rem 2rem',
    background: 'white',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  heroImage: {
    width: '90%', // Adjust the size of the hero image
    maxWidth: '500px',
    marginBottom: '20px',
  },
  latestBlock: {
    width: '80%',
    maxWidth: '500px',
    marginBottom: '30px', // Adds separation from other blocks
    padding: '20px',
    backgroundColor: '#f0f0f0', // Light background to differentiate the block
    borderRadius: '10px', // Rounded corners for aesthetic
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    width: '100%',       // Ensure full width for proper centering of items
    maxWidth: '500px',   // Limit width to avoid stretching too far on large screens
  },
  icon: {
    width: '30px',
    height: '30px',
    marginRight: '10px',
  },
  link: {
    fontSize: '18px',
    color: '#00adb5',
    textDecoration: 'none',
  },
  latestVideo: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '0',
  },
};

export default Linktree;
