import React from 'react';
import '../../../css/ProjectsHome.css';
import myImage1 from '../../../Assets/ACC/ACC_Profile_1.jpg';
import myImage2 from '../../../Assets/Dart/DART_Profile_1.jpg';
import myImage3 from '../../../Assets/RA/RA_Profile_01.jpg';
import myImage4 from '../../../Assets/IT/IT_Profile_01.png';
import { useNavigate } from 'react-router-dom'; 

export default function ProjectsHome() {
    const navigate = useNavigate();


    let navigateToNewPage = (address) => {
        let targetSection = document.getElementById('home');
        targetSection.scrollIntoView({ behavior: 'auto' });
        setTimeout(() => {
            navigate(address);
        }, 0);
    }

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
                <div onClick={()=> {navigateToNewPage('/ACC-Project')}} className='box box-1' style={{ backgroundImage: `url(${myImage1})` }} data-text="ACC"></div>
                <div onClick={()=> {navigateToNewPage('/Dart-Project')}} className='box box-2' style={{ backgroundImage: `url(${myImage2})` }} data-text="DART"></div>
                <div onClick={()=> {navigateToNewPage('/RA-Project')}} className='box box-3' style={{ backgroundImage: `url(${myImage3})` }} data-text="RA"></div>
                <div className='box box-4' style={{ backgroundImage: `url(${myImage4})` }} data-text="IT"></div>
            </div>
        </div>
    )
}