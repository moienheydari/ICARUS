import React from 'react';
import '../css/Logo.css';
import myImage from '../Assests/ICARUS_LOGO_BLACK.png';

export default function Logo() {

    return (
        <div className='logo'>
            <img src={myImage} alt="Logo" />
        </div>
    )
}