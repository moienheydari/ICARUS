import React from 'react';
import '../../../css/NavBarHome.css';
import { Link } from 'react-router-dom';

export default function NavBarHome() {
    function handleClickProjects() {
        let targetSection = document.getElementById('projects');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <div className='navbarhome'>
            <button className='button' onClick={handleClickProjects}>Projects</button>
            <Link className='button'>Apply</Link>
            <Link className='button'>Sponsors</Link>
            <Link className='button' to={'/Members'}>Members</Link>
        </div>
    )
}