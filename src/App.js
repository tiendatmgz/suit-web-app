import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App font-raleway">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes here */}
        </Routes>
      </header>
    </div>
  );
}

export default App;