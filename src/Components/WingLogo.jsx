import '../css/WingLogo.css';
import myImage from '../Assets/Logos/ICARUS_LOGO_WING.png';


export default function WingLogo() {
    const handelClick = () => {
        setTimeout(() => {
            let targetSection = document.getElementById('navbarhom');
            let targetSection2 = document.getElementById('navbar');
            (targetSection || targetSection2).scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }

    return (
        <div className='winglogo'>
            <div className='content'>
                <img src={myImage} alt="Logo" onClick={handelClick} />
            </div>
        </div>
    )
}