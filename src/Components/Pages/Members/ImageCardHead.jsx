import React from 'react';
import '../../../css/ImageCardHead.css';

export default function ImageCardHead({ image, index, name }) {
    name = new String(name)
    const nameContent = name.split('_');
    const moreInfo = {
        'Email': nameContent[4],
    }
    const moreInfoArray = [];
    for (const key of Object.keys(moreInfo)) {
        moreInfoArray.push([key, moreInfo[key]]);
    }

    return (
        <div className='imagecardhead'>
            <img className='imagehead' src={image} alt={`image-${index}`} key={index} />
            <div className='info'>
                <div className='info-text'>
                    {moreInfoArray.map((pair) => {
                        return (
                            <p key={`adwdad-${pair[1]}`}>
                                <svg width="8" height="8"><circle cx="4" cy="4" r="4" fill="white" /></svg>&nbsp;
                                {pair[0]} : {pair[1]}<br />
                            </p>
                        )
                    })}
                </div>
            </div>
            <p className='names'>{nameContent[2] + ' ' + nameContent[3]}</p>
        </div>
    )
}