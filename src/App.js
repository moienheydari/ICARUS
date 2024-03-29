import './css/App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactUs from  './Components/ContactUS'
import Home from './Components/Pages/Home';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}
