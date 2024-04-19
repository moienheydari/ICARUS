import React from 'react';
import '../../../css/MemberPhotos.css';
import ImageCard from './ImageCard';

export default function MemberPhotos() {
    const images = require.context('../../../Assets/Members', true);
    const imageList = images.keys().map(image => images(image));

    return (
        <div className='memberphotos'>
            <div className='memberhead'>

            </div>
            <div className='memberbody'>
                {imageList.map((image, index) => (
                    <ImageCard image={image} index={index} />
                ))}
            </div>
        </div>
    )
}