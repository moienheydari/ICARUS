import '../../../css/Sponsors.css';
import ContactUS from '../../ContactUS';
import NavBar from '../../NavBar';
import WingLogo from '../../WingLogo';
import SponsorPhotos from './SponsorPhotos';

export default function Sponsors() {

    return (
        <div className='sponsors'>
            <WingLogo />
            <NavBar />
            <SponsorPhotos />
            <ContactUS />
        </div>
    )
}