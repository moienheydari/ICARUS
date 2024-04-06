import React from 'react';
import '../../../css/Projects.css';
import Logo from '../../Logo.jsx';
import ContactUS from '../../ContactUS.jsx';
import NavBar from '../../NavBar.jsx';

export default function Projects() {

    return (
        <div className='projects'>
            <div className='header'>
                <Logo />
                <NavBar />
            </div>
            <ContactUS />
        </div>
    )
}