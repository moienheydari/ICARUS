import '../../../css/SponsorPhotos.css';
import SponsorCard from './SponsorCard';

export default function SponsorPhotos() {
    const images = require.context('../../../Assets/Sponsors', true);
    const imageList = images.keys().map(image => images(image));
    const imageNames = images.keys().map(image => {
        const imageNameWithExtension = image.split('/').pop();
        const imageName = imageNameWithExtension.replace(/\.[^.]+$/, "");
        return imageName;
    });

    return (
        <div className='sponsorphotos'>
            {imageList.map((image, index) => {
                return <SponsorCard image={image} index={index} key={index} name={imageNames[index]} />
            }
            )}
        </div>
    )
}