import { useEffect } from 'react';
import '../../../css/Home.css';
import NavBarHome from './NavBarHome.jsx';
import Introduce from './Introduce.jsx';
import Projects from './ProjectsHome.jsx';
import ContactUS from '../../ContactUS.jsx';

export default function Home() {
    ////////////// When Opened with <Link>
    useEffect(() => {
        let targetSection = document.getElementById('home');
        targetSection.scrollIntoView({ behavior: 'auto' });
    }, [])


    return (
        <div className='home' id='home'>
            <NavBarHome />
            <Introduce />
            <Projects />
            <ContactUS />
        </div>
    )
}