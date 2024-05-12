import '../../../css/Home.css';
import NavBarHome from './NavBarHome.jsx';
import Introduce from './Introduce.jsx';
import Projects from './ProjectsHome.jsx';
import ContactUS from '../../ContactUS.jsx';
import WingLogo from '../../WingLogo.jsx';

export default function Home() {
    return (
        <div className='home' id='home'>
            <WingLogo />
            <NavBarHome />
            <Introduce />
            <Projects />
            <ContactUS />
        </div>
    )
}