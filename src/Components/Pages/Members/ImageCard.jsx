import React from 'react';
import '../../../css/ImageCard.css';

export default function ImageCard({ image, index, name }) {
    name = new String(name)
    const nameContent = name.split('_');
    const moreInfo = {
        'Role': nameContent[1],
        'Email': (nameContent[4] != 'inseriremail') ? nameContent[4] : '*****'
    }
    const moreInfoArray = [];
    for (const key of Object.keys(moreInfo)) {
        moreInfoArray.push([key, moreInfo[key]]);
    }

    return (
        <div className='imagecard'>
            <img className='imagebody' src={image} alt={`image-${index}`} key={index} />
            <div className='info'>
                <div className='info-text'>
                    {moreInfoArray.map((pair) => {
                        return (
                            <p key={`adwdad-${pair[1]}`}>
                                <svg width="8" height="8"><circle cx="4" cy="4" r="4" fill="white" /></svg>&nbsp;
                                {pair[0]} : {pair[1]}
                                <br />
                            </p>
                        )
                    })}
                </div>
            </div>
            <p className='names'>{nameContent[2] + ' ' + nameContent[3]}</p>
        </div>
    )
}