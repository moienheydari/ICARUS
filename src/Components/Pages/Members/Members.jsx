import React from 'react';
import '../../../css/Members.css';
import Logo from '../../Logo';
import NavBar from '../../NavBar';
import ContactUS from '../../ContactUS';
import MemberPhotos from './MemberPhotos';

export default function Members() {

    return (
        <div className='members'>
            <NavBar />
            <MemberPhotos />
            <ContactUS />
        </div>
    )
}