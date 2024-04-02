import './css/App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Videofile from './Assets/BackgroundVideo.mp4'

export default function App() {
  return (
    <div className="App">
      <div className="background-video">
        <video autoPlay loop muted>
          <source src={Videofile} type="video/mp4" />
        </video>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}
