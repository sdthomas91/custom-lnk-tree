import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div style={styles.container}>
      <h1>Website Coming Soon</h1>
      <p>We're working hard to launch our new website. Stay tuned!</p>
      <Link to="/links">Visit our Linktree</Link>
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
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
};

export default ComingSoon;
