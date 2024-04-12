import React from 'react';
import '../css/Logo.css';
import myImage from '../Assets/ICARUS_LOGO_WHITE.png';
import { Link } from 'react-router-dom';

export default function Logo() {

    return (
        <Link to="/">
            <div className='logo'>
                <img src={myImage} alt="Logo" />
            </div>
        </Link>
    )
}