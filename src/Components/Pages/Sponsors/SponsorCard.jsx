import '../../../css/SponsorCard.css';

export default function SponsorCard({ image, index, name }) {
    name = new String(name)
    const nameContent = name.split('_');

    const handleClick = (link) => {
        if (link) {
            window.open('https://' + link, "_blank");
        }
    }

    return (
        <div className='sponsorcard' onClick={() => { handleClick(nameContent[1]) }}>
            <img className='imagebody' src={image} alt={`image-${index}`} key={index} />
            <p className='names'>{nameContent[0]}</p>
        </div>
    )
}