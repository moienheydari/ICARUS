import React, { useEffect, useState } from 'react';
import '../../../css/HorizontalGallery.css';
import myImage1 from '../../../Assets/Home/Gallery_01.jpg';
import myImage2 from '../../../Assets/Home/Gallery_02.jpg';
import myImage3 from '../../../Assets/Home/Gallery_03.jpg';
import myImage4 from '../../../Assets/Home/Gallery_04.jpg';
import myImage5 from '../../../Assets/Home/Gallery_05.jpg';

export default function HorizontalGallery({ height }) {
    const [slides, setSlides] = useState([[0 * height, 0], [1 * height, 1], [2 * height, 1], [3 * height, 1], [4 * height, 0]]);
    const delay = 2750;

    /// setting-interval
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
            <div className='slide slide-1' style={{ backgroundImage: `url(${myImage1})`, transform: `translateY(${slides[0][0] + 'px'})`, opacity: slides[0][1], transition: `all ${delay - 300}ms`, height: `${height}px` }}></div>
            <div className='slide slide-2' style={{ backgroundImage: `url(${myImage2})`, transform: `translateY(${slides[1][0] + 'px'})`, opacity: slides[1][1], transition: `all ${delay - 300}ms`, height: `${height}px` }}></div>
            <div className='slide slide-3' style={{ backgroundImage: `url(${myImage3})`, transform: `translateY(${slides[2][0] + 'px'})`, opacity: slides[2][1], transition: `all ${delay - 300}ms`, height: `${height}px` }}></div>
            <div className='slide slide-4' style={{ backgroundImage: `url(${myImage4})`, transform: `translateY(${slides[3][0] + 'px'})`, opacity: slides[3][1], transition: `all ${delay - 300}ms`, height: `${height}px` }}></div>
            <div className='slide slide-5' style={{ backgroundImage: `url(${myImage5})`, transform: `translateY(${slides[4][0] + 'px'})`, opacity: slides[4][1], transition: `all ${delay - 300}ms`, height: `${height}px` }}></div>
        </div>
    )
}

