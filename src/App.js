import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/Navbar/Navbar';
import Feed from './Components/Feed/Feed';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/feed" element={<Feed />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Feed />} /> 
      </Routes>
    </Router>
  );
};

export default App;
