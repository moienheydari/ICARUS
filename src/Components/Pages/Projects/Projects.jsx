import { useEffect } from 'react';
import ProjectDiscription from './ProjectDiscription.jsx';
import ContactUS from '../../ContactUS.jsx';
import NavBar from '../../NavBar.jsx';
import '../../../css/Projects.css';

export default function Projects({ children, load }) {

    ////////////// When Opened with <Link>
    useEffect(() => {
        let targetSection = document.getElementById('projects');
        targetSection.scrollIntoView({ behavior: 'auto' });
    }, [])

    return (
        <div className='projects' id='projects'>
            <NavBar />
            <ProjectDiscription load={load}>{children}</ProjectDiscription>
            <ContactUS />
        </div>
    )
}