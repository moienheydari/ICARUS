import React, { useEffect, useState } from 'react';
import '../css/HorizontalGallery.css';
import myImage1 from '../Assests/PictureOne.png';
import myImage2 from '../Assests/PictureTwo.png';
import myImage3 from '../Assests/PictureThree.png';
import myImage4 from '../Assests/PictureFour.png';
import myImage5 from '../Assests/PictureFive.png';

export default function HorizontalGallery() {
    const height = 150;
    const delay = 2000;
    const [slides, setSlides] = useState([[0 * height, 0], [1 * height, 1], [2 * height, 1], [3 * height, 1], [4 * height, 0]]);

    useEffect(() => {
        setInterval(() => {
            changeSlides();
        }, delay);
    }, [])


    let changeSlides = () => {
        setSlides((prev) => {
            return prev.map((each) => {
                let a = each[0] + height;
                let b = (a === 0) || (a > (3 * height)) ? 0 : 1;
                a %= height * 5;
                return [a, b]
            })
        })
    }


    return (
        <div className='horizontalgallery' style={{ transform: `translateY(${-height + 'px'})`, height: `${height * 4}px` }}>
            <div className='slide slide-1' style={{ '--img': `url(${myImage1})`, transform: `translateY(${slides[0][0] + 'px'})`, opacity: slides[0][1], transition: `all ${delay - 300}ms`, height: `${height}px` }}></div>
            <div className='slide slide-2' style={{ '--img': `url(${myImage2})`, transform: `translateY(${slides[1][0] + 'px'})`, opacity: slides[1][1], transition: `all ${delay - 300}ms`, height: `${height}px` }}></div>
            <div className='slide slide-3' style={{ '--img': `url(${myImage3})`, transform: `translateY(${slides[2][0] + 'px'})`, opacity: slides[2][1], transition: `all ${delay - 300}ms`, height: `${height}px` }}></div>
            <div className='slide slide-4' style={{ '--img': `url(${myImage4})`, transform: `translateY(${slides[3][0] + 'px'})`, opacity: slides[3][1], transition: `all ${delay - 300}ms`, height: `${height}px` }}></div>
            <div className='slide slide-5' style={{ '--img': `url(${myImage5})`, transform: `translateY(${slides[4][0] + 'px'})`, opacity: slides[4][1], transition: `all ${delay - 300}ms`, height: `${height}px` }}></div>
        </div>
    )
}

