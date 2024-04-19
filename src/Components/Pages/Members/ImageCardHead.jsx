import React from 'react';
import '../../../css/ImageCardHead.css';

export default function ImageCardHead({ image, index, name }) {
    name = new String(name)
    const nameContent = name.split('_');

    return (
        <div className='imagecardhead'>
            <img className='imagehead' src={image} alt={`image-${index}`} key={index}/>
            <p className='names'>{nameContent[2] + ' ' + nameContent[3]}</p>
        </div>
    )
}