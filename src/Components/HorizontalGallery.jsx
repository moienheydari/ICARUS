import React, { useState } from 'react';
import '../css/HorizontalGallery.css';
import myImage1 from '../Assests/PictureOne.png';
import myImage2 from '../Assests/PictureTwo.png';
import myImage3 from '../Assests/PictureThree.png';
import myImage4 from '../Assests/PictureFour.png';

export default function HorizontalGallery() {
    const [slides, setSlides] = useState([[0 , 0], [120 , 1], [240 , 1], [360 , 1]])

    return (
        <div className='horizontalgallery'>
            <div className='slide slide-1' style={{ '--img': `url(${myImage1})` , transform: `translateY(${slides[0][0] + 'px'})` , opacity: slides[0][1] }}></div>
            <div className='slide slide-2' style={{ '--img': `url(${myImage2})` , transform: `translateY(${slides[1][0] + 'px'})` , opacity: slides[1][1] }}></div>
            <div className='slide slide-3' style={{ '--img': `url(${myImage3})` , transform: `translateY(${slides[2][0] + 'px'})` , opacity: slides[2][1] }}></div>
            <div className='slide slide-4' style={{ '--img': `url(${myImage4})` , transform: `translateY(${slides[3][0] + 'px'})` , opacity: slides[3][1] }}></div>
        </div>
    )
}