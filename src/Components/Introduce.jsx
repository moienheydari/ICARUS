import React from 'react';
import '../css/Introduce.css';
import HorizontalGallery from './HorizontalGallery';

export default function Introduce() {

    return (
        <div className='introduce'>
            <p className='title1'>Team ICARUS PoliTO</p>
            <br />
            <div className='mid'>
                <HorizontalGallery />
                <div className='texts'>
                    <br /><br /><br /><br /><br />
                    <p className='title2'>WHO ARE WE?</p>
                    <br />
                    <p className='expl'>ICARUS PoliTO is a Student Team of the Politecnico di Torino. Born in 2015 with a purely aerospace character, the Team has more than 90 effective members working on 4 main projects</p>
                </div>
                <HorizontalGallery />
            </div>
        </div>
    )
}