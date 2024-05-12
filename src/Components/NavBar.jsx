import React from 'react';
import '../css/NavBar.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';

export default function NavBar() {
    const location = useLocation();

    const handleLinkClick = (name) => {
        if (location.pathname === name) {
            window.location.reload();
        }
    };


    return (
        <div className='navbar' id='navbar'>
            <Logo />
            <div className='buttons'>
                <div className='farleft' >
                    Projects
                    <div className='projButtons'>
                        <div className='content'>
                            <Link className='button' to={'/ACC-Project'} onClick={() => { handleLinkClick('/ACC-Project') }}>ACC</Link>
                            <Link className='button' to={'/Dart-Project'} onClick={() => { handleLinkClick('/Dart-Project') }}>DART</Link>
                            <Link className='button' to={'/RA-Project'} onClick={() => { handleLinkClick('/RA-Project') }}>RA</Link>
                            <Link className='button fardown' to={'/IT-Project'} onClick={() => { handleLinkClick('/IT-Project') }}>IT</Link>
                        </div>
                    </div>
                </div>
                <Link className='button' to={'/Apply'} onClick={() => { handleLinkClick('/Apply') }}>Apply</Link>
                <Link className='button' to={'/Sponsors'} onClick={() => { handleLinkClick('/Sponsors') }}>Sponsors</Link>
                <Link className='button membrs' to={'/Members'} onClick={() => { handleLinkClick('/Members') }}>Members</Link>
            </div>
        </div>
    )
}