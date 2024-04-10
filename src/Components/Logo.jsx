import React from 'react';
import '../css/Logo.css';
import myImage from '../Assets/ICARUS_LOGO_WHITE.png';
import { useNavigate } from 'react-router-dom';

export default function Logo() {
    const navigate = useNavigate();

    let handleClick = () => {
        navigate('/');
    }

    return (
        <div onClick={handleClick} className='logo'>
            <img src={myImage} alt="Logo" />
        </div>
    )
}