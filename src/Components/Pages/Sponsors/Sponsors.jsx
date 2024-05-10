import '../../../css/Sponsors.css';
import ContactUS from '../../ContactUS';
import NavBar from '../../NavBar';
import SponsorPhotos from './SponsorPhotos';

export default function Sponsors() {

    return (
        <div className='sponsors'>
            <NavBar />
            <SponsorPhotos />
            <ContactUS />
        </div>
    )
}