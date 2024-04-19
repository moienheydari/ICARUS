import React from 'react';
import '../../../css/ImageCard.css';

export default function ImageCard({ image, index, height, name }) {
    name = new String(name)
    const nameContent = name.split('_');

    return (
        <div className='imagecard'>
            <img className='imagebody' src={image} alt={`image-${index}`} key={index} style={{ height: height }} />
            <p className='names'>{nameContent[2] + ' ' + nameContent[3]}</p>
        </div>
    )
}