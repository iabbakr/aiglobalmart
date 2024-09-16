import React from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="logo" to="/">AI Global Mart</Link>
        <nav>
          <Link className="home-nav" to="/">Home</Link>
          <Link className="profile-nav" to="/profile">Profile</Link>
          <Link className="about-nav" to="about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
