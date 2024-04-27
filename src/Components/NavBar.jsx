import React from 'react';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

export default function NavBar() {


    return (
        <div className='navbar'>
            <Logo />
            <div className='buttons'>
                <Link className='button farleft'>Projects</Link>
                <Link className='button'>Apply</Link>
                <Link className='button'>Sponsors</Link>
                <Link className='button' to={'/Members'}>Members</Link>
            </div>
        </div>
    )
}