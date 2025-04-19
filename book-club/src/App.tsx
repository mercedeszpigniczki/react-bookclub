import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu'; // Adjust the path if necessary
import Home from './pages/Home';
import Characters from './pages/Characters';


function App() {
  return (
    <Router>
       <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
    </Router>
  );
}

export default App;
