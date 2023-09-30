import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cat from './Cat';
import Home from './Home';
import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cat" element={<Cat />} />
      </Routes>
    </BrowserRouter>
  );
}
