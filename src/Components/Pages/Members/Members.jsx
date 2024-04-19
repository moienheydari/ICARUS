import React from 'react';
import '../../../css/Members.css';
import Logo from '../../Logo';
import NavBar from '../../NavBar';
import ContactUS from '../../ContactUS';

export default function Members() {

    return (
        <div className='members'>
            <div className='header'>
                <Logo />
                <NavBar />
            </div>
            <div></div>
            <div></div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div></div>
            <div></div>
            <ContactUS />
        </div>
    )
}