import React from 'react';
import '../../../css/Projects.css';
import Logo from '../../Logo.jsx';
import ContactUS from '../../ContactUS.jsx';
import NavBar from '../../NavBar.jsx';
import ProjectDiscription from './ProjectDiscription.jsx';

export default function Projects({children}) {

    return (
        <div className='projects' id='projects'>
            <div className='header'>
                <Logo />
                <NavBar />
            </div>
            <ProjectDiscription>{children}</ProjectDiscription>
            <ContactUS />
        </div>
    )
}