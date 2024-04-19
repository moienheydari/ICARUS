import './css/App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Videofile from './Assets/BackgroundVideo.mp4'
import ACC from './Components/Pages/Projects/ACC';
import Dart from './Components/Pages/Projects/Dart';
import RA from './Components/Pages/Projects/RA';
import Members from './Components/Pages/Members/Members';

export default function App() {
  return (
    <div className="App" id='app'>
      {/* <div className="background-video">
        <video autoPlay loop muted>
          <source src={Videofile} type="video/mp4" />
        </video>
      </div> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ACC-Project' element={<ACC />} />
        <Route path='/Dart-Project' element={<Dart />} />
        <Route path='/RA-Project' element={<RA />} />
        <Route path='/Members' element={<Members />} />
      </Routes>
    </div>
  );
}
