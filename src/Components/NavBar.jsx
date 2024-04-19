import React from 'react';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {


    return (
        <div className='navbar'>
            <div className='content'>
                <Link className='button'>Projects</Link>
                <Link className='button'>Apply</Link>
                <Link className='button'>Sponsors</Link>
                <Link className='button' to={'/Members'}>Members</Link>
            </div>
        </div>
    )
}