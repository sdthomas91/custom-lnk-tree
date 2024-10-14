// src/components/Linktree.js
import React from 'react';
import instagramIcon from '../assets/instagram.svg';
import tiktokIcon from '../assets/tiktok.svg';
import youtubeIcon from '../assets/youtube.svg';
import emailIcon from '../assets/email.svg';

const Linktree = () => {
  const links = [
    { title: 'Latest Update: Why we left the UK!', url: 'https://www.tiktok.com/@theunconventionalfam/video/7425558331663715617', thumbnail: '/images/thumbnail-latest.png' },
    { title: '@theunconventionalfam', url: 'https://www.tiktok.com/@theunconventionalfam', icon: tiktokIcon },
    { title: '@theunconventionalfamily_', url: 'http://instagram.com/theunconventionalfamily_', icon: instagramIcon },
    { title: 'The Unconventional Family', url: 'https://www.youtube.com/@Theunconventionalfamily', icon: youtubeIcon },
    { title: 'info@unconventionalfam.com', url: 'mailto:info@unconventionalfam.com', icon: emailIcon }
  ];

  const latestVideo = {
    title: 'Latest TikTok',
    url: 'https://www.tiktok.com/@theunconventionalfam/video/7425558331663715617',
  };

  return (
    <div style={styles.container}>
      <h1>Your Name or Brand</h1>

      {/* Latest Video Link */}
      <div style={styles.linkContainer}>
        <p style={styles.latestVideo}>
          <a href={latestVideo.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
            {latestVideo.title}
          </a>
        </p>
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
    padding: '50px',
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
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
    marginBottom: '20px',
  },
};

export default Linktree;
