import React from 'react';
import '../css/Projects.css';
import myImage1 from '../Assets/PictureOne.png';
import myImage2 from '../Assets/PictureTwo.png';
import myImage3 from '../Assets/PictureThree.png';
import myImage4 from '../Assets/PictureFour.png';

export default function Projects() {

    return (
        <div className='projects' id='projects'>
            <div className='expl'>
                <p className='title'>Our PROJECTS :</p>
                <br />
                <p>
                    1. ACC: &nbsp;&nbsp;Design and Construction of a Competition UAV
                    <br />
                    2. RA: &nbsp;&nbsp; Design and Construction of a Solar-Powered UAV
                    <br />
                    3. DART: &nbsp;&nbsp;Design and Construction of a Rocket Model with Solid Propellant
                    <br />
                    4. IT: &nbsp;&nbsp;Dealing with the Electronic and IT part of the projects, the Communication and Design Area of the Team in internal management and communication, and Taking Care of Social Media.
                </p>
            </div>

            <div className='gallerycontainer' >
                <div className='box box-1' style={{ background: `url(${myImage1}) center center` }} data-text="ACC"></div>
                <div className='box box-2' style={{ background: `url(${myImage2}) center center` }} data-text="DART"></div>
                <div className='box box-3' style={{ background: `url(${myImage3}) center center` }} data-text="RA"></div>
                <div className='box box-4' style={{ background: `url(${myImage4}) center center` }} data-text="IT"></div>
            </div>
        </div>
    )
}