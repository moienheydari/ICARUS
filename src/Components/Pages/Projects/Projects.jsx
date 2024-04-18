import React, { useEffect } from 'react';
import '../../../css/Projects.css';
import Logo from '../../Logo.jsx';
import ContactUS from '../../ContactUS.jsx';
import NavBar from '../../NavBar.jsx';
import ProjectDiscription from './ProjectDiscription.jsx';

export default function Projects({ children, load }) {

    useEffect(() => {
        ////////////// When Opened with <Link>
        let targetSection = document.getElementById('projects');
        targetSection.scrollIntoView({ behavior: 'auto' });
    }, [])

    return (
        <div className='projects' id='projects'>
            <div className='header'>
                <Logo />
                <NavBar />
            </div>
            <ProjectDiscription load={load}>{children}</ProjectDiscription>
            <ContactUS />
        </div>
    )
}