import React, { useEffect } from 'react';
import '../../../css/ProjectsHome.css';
import myImage1 from '../../../Assets/ACC/ACC_Profile_1.jpg';
import myImage2 from '../../../Assets/Dart/DART_Profile_1.jpg';
import myImage3 from '../../../Assets/RA/RA_Profile_01.jpg';
import myImage4 from '../../../Assets/IT/IT_Profile_01.jpg';
import { Link } from 'react-router-dom';

export default function ProjectsHome() {

    return (
        <div className='projectshome' id='projects'>
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
                <Link to="/ACC-Project" className='box box-1' data-text="ACC">
                    <img src={myImage1} alt="not Supported" loading='eager' />
                </Link>
                <Link to="/Dart-Project" className='box box-2' data-text="DART">
                    <img src={myImage2} alt="not Supported" loading='eager' />
                </Link>
                <Link to="/RA-Project" className='box box-3' data-text="RA">
                    <img src={myImage3} alt="not Supported" loading='eager' />
                </Link>
                <Link to="/" className='box box-4' data-text="IT">
                    <img src={myImage4} alt="not Supported" loading='eager' />
                </Link>
            </div>
        </div>
    )
}