import React from 'react';
import '../../../css/Home.css';
import Logo from '../../Logo.jsx';
import NavBarHome from './NavBarHome.jsx';
import Introduce from './Introduce.jsx';
import Projects from './ProjectsHome.jsx';
import ContactUS from '../../ContactUS.jsx';

export default function Home() {

    return (
        <div className='home' id='home'>
            <NavBarHome />
            <Introduce />
            <Projects />
            <ContactUS />
        </div>
    )
}