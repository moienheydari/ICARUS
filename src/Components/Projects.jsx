import React from 'react';
import '../css/Projects.css';
import myImage1 from '../Assests/PictureOne.png';
import myImage2 from '../Assests/PictureTwo.png';
import myImage3 from '../Assests/PictureThree.png';
import myImage4 from '../Assests/PictureFour.png';

export default function Projects() {

    return (
        <div className='projects'>
            <p className='expl'>
                Our PROJECTS :
                1. ACC: Design and Construction of a Competition UAV

                2. RA: Design and Construction of a Solar-Powered UAV

                3. DART: Design and Construction of a Rocket Model with Solid Propellant

                4. IT: Dealing with the Electronic and IT part of the projects, the Communication and Design Area of the Team in internal management and communication, and Taking Care of Social Media.
            </p>

            <div className='gallerycontainer'>
                <div className='box box-1' style={{ '--img': `url(${myImage1})` }} data-text="ACC"></div>
                <div className='box box-2' style={{ '--img': `url(${myImage2})` }} data-text="DART"></div>
                <div className='box box-3' style={{ '--img': `url(${myImage3})` }} data-text="RA"></div>
                <div className='box box-4' style={{ '--img': `url(${myImage4})` }} data-text="IT"></div>
            </div>
        </div>
    )
}