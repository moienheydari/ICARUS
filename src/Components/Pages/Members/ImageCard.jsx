import React from 'react';
import '../../../css/ImageCard.css';

export default function ImageCard({ image, index }) {

    return (
        <div className='imagecard'>
            <img src={image} alt={`image-${index}`} key={index} />
        </div>
    )
}