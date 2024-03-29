import React from 'react';
import '../../css/Home.css';
import Logo from '../Logo.jsx';
import NavBar from '../NavBar.jsx';
import Introduce from '../Introduce.jsx';
import Projects from '../Projects.jsx';
import ContactUS from '../ContactUS';

export default function Home() {

    return (
        <div className='home'>
            <div className='header'>
                <Logo />
                <NavBar />
            </div>
            <Introduce />
            <Projects />
            <ContactUS />
        </div>
    )
}