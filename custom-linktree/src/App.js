import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Linktree from './components/Linktree';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page shows "Coming Soon" */}
        <Route path="/" element={<ComingSoon />} />
        {/* Linktree page */}
        <Route path="/links" element={<Linktree />} />
      </Routes>
    </Router>
  );
}

export default App;
