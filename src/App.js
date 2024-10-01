// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/Navbar';
import Feed from './Components/Feed';
import Profile from './Components/Profile';
import About from './Components/About';
import Settings from './Components/Settings';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/feed" element={<Feed />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Feed />} /> 
      </Routes>
    </Router>
  );
};

export default App;
