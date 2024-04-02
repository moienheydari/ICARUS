import React from 'react';
import '../css/NavBarHome.css';

export default function NavBarHome() {
    function handleClickProjects() {
        let targetSection = document.getElementById('projects');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <div className='navbarhome'>
            <button onClick={handleClickProjects}>Projects</button>
            <button>Apply</button>
            <button>Sponsors</button>
            <button>Members</button>
        </div>
    )
}