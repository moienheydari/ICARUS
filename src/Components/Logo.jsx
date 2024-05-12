import React from 'react';
import '../css/Logo.css';
import myImage from '../Assets/Logos/ICARUS_LOGO_WHITE.png';
import { Link, useLocation } from 'react-router-dom';

export default function Logo() {
    const location = useLocation();

    const handleLinkClick = () => {
        if (location.pathname === '/') {
            window.location.reload();
        }
    };

    return (
        <Link to="/" onClick={handleLinkClick}>
            <div className='logo'>
                <img src={myImage} alt="Logo" />
            </div>
        </Link>
    )
}