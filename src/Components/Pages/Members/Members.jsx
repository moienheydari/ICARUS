import React from 'react';
import '../../../css/Members.css';
import Logo from '../../Logo';
import NavBar from '../../NavBar';
import ContactUS from '../../ContactUS';
import MemberPhotos from './MemberPhotos';
import WingLogo from '../../WingLogo';

export default function Members() {

    return (
        <div className='members'>
            <WingLogo />
            <NavBar />
            <MemberPhotos />
            <ContactUS />
        </div>
    )
}