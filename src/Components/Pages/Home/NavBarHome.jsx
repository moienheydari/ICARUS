import React from 'react';
import '../../../css/NavBarHome.css';
import Logo from '../../Logo.jsx';
import { Link } from 'react-router-dom';

export default function NavBarHome() {
    function handleClickProjects() {
        let targetSection = document.getElementById('projects');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <div className='navbarhom'>
            <Logo />
            <div className='buttons'>
                <Link className='button farleft' onClick={handleClickProjects}>Projects</Link>
                <Link className='button'>Apply</Link>
                <Link className='button'>Sponsors</Link>
                <Link className='button membrs' to={'/Members'}>Members</Link>
            </div>
        </div>
    )
}