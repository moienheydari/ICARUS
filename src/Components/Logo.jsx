import React from 'react';
import '../css/Logo.css';
import myImage from '../Assets/ICARUS_LOGO_WHITE.png';

export default function Logo() {

    return (
        <div className='logo'>
            <img src={myImage} alt="Logo" />
        </div>
    )
}