import React from 'react';
import instagramIcon from '../assets/instagram.svg';
import tiktokIcon from '../assets/tiktok.svg';
import youtubeIcon from '../assets/youtube.svg';
import emailIcon from '../assets/email.svg';
import heroImage from '../assets/hero.jpg';

const Linktree = () => {
  const links = [
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
        {/* Video Thumbnail on the left */}
        <img src="/images/thumbnail-latest.png" alt="Why we left the UK" style={styles.thumbnail} />
        
        {/* Text block on the right */}
        <div style={styles.latestVideoTextBlock}>
          <p style={styles.latestVideo}>
            <a href={latestVideo.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
              {latestVideo.title}
            </a>
          </p>
          <a href="https://www.tiktok.com/@theunconventionalfam/video/7425558331663715617" target="_blank" rel="noopener noreferrer" style={styles.link}>
            Why we left the UK!
          </a>
        </div>
      </div>
  
      {/* Social Links as Pills */}
      {links.map((link, index) => (
        <div key={index} style={styles.pillContainer}>
          {link.icon && <img src={link.icon} alt={link.title} style={styles.icon} />}
          <a href={link.url} target="_blank" rel="noopener noreferrer" style={styles.pillLink}>
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
    overflow: 'hidden',
  },
  heroImage: {
    width: '90%',
    maxWidth: '500px',
    marginBottom: '20px',
  },
  latestBlock: {
    width: '100%',
    maxWidth: '700px',
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center', // Align items to the center vertically
    justifyContent: 'center', 
    flexWrap: 'wrap',
    boxSizing: 'border-box',
  },
  thumbnail: {
    width: '100%',
    maxWidth: '100px', 
    height: 'auto',
    borderRadius: '10px',
    marginRight: '20px',
    flexShrink: 0,
  },
  latestVideoTextBlock: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center align the text vertically
    textAlign: 'left', // Align text to the left for readability
  },
  latestVideo: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#00adb5',
    textDecoration: 'underline',
    marginBottom: '5px',
    marginTop: '5px',
  },
  link: {
    fontSize: '18px',
    color: '#000',
    textDecoration: 'none',
  },
  pillContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#D8BFD8',
    padding: '10px 20px',
    borderRadius: '50px',
    marginBottom: '15px',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Add box-shadow for depth
  },
  icon: {
    width: '30px',
    height: '30px',
    marginRight: '10px',
  },
  pillLink: {
    fontSize: '18px',
    color: '#fff',
    textDecoration: 'none',
    flex: 1,
  },
};



export default Linktree;


