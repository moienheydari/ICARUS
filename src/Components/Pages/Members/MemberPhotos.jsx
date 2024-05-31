import React, { useEffect, useRef, useState } from 'react';
import '../../../css/MemberPhotos.css';
import ImageCard from './ImageCard';
import myImage1 from '../../../Assets/Managers/ACC_TeamLeader_Antonella_DeDato_antonella.dedato00@gmail.com.png';
import myImage2 from '../../../Assets/Managers/DART_ProjectManager_Matteo_Cafaro_matteo.cafaro@polito.it.png';
import myImage3 from '../../../Assets/Managers/RA_ProjectManagerRA_Stefano_Zappone_stefano.zappone@gmail.com.png';
import myImage4 from '../../../Assets/Managers/IT_Responsabile_Angelo_Romano_angelodaroma00@gmail.com.png';
import myImage5 from '../../../Assets/Managers/Communication_SocialMediaManager_Andra_Mihaila_andra.mihaila11@gmail.com.png';
import ImageCardHead from './ImageCardHead';



export default function MemberPhotos() {
    const [panel, setPanel] = useState('empty');

    const images = require.context('../../../Assets/Members', true);
    const imageList = images.keys().map(image => images(image));
    const imageNames = images.keys().map(image => {
        const imageNameWithExtension = image.split('/').pop();
        const imageName = imageNameWithExtension.replace(/\.[^.]+$/, "");
        return imageName;
    });

    const container = useRef();
    const children = useRef();

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        container.current = document.querySelector('.memberbody');
        children.current = container.current.querySelectorAll('.panel');
        handleResize();
    }, [])

    const handleResize = () => {
        const maxHeight = Math.max(...Array.from(children.current).map(child => child.offsetHeight));
        container.current.style.height = `${maxHeight}px`;
    }

    const handleButton = (panel) => {
        setPanel(panel);

        const intervalId = setInterval(() => {
            handleResize();
        }, 10);

        setTimeout(() => {
            clearInterval(intervalId);
            handleResize();
        }, 2000);
    }

    return (
        <div className='memberphotos'>
            <div className='memberhead'>
                <div className='heads' onClick={() => { handleButton('acc') }}>
                    <ImageCardHead image={myImage1} index={101} name={'ACC_TeamLeader_Antonella_DeDato_antonella.dedato00@gmail.com'} />
                    <p className='button' onClick={() => { handleButton('acc') }} style={{ background: 'rgba(0, 2, 73, 0.7)' }}>Project Manager of <br />ACC</p>
                </div>
                <div className='heads' onClick={() => { handleButton('dart') }}>
                    <ImageCardHead image={myImage2} index={102} name={'DART_ProjectManager_Matteo_Cafaro_matteo.cafaro@polito.it'} />
                    <p className='button' onClick={() => { handleButton('dart') }} style={{ background: 'rgba(0, 2, 73, 0.7)' }}>Project Manager of <br />DART</p>
                </div>
                <div className='heads' onClick={() => { handleButton('ra') }}>
                    <ImageCardHead image={myImage3} index={103} name={'RA_ProjectManagerRA_Stefano_Zappone_stefano.zappone@gmail.com'} />
                    <p className='button' onClick={() => { handleButton('ra') }} style={{ background: 'rgba(0, 2, 73, 0.7)' }}>Project Manager of <br />RA</p>
                </div>
                <div className='heads' onClick={() => { handleButton('it') }} >
                    <ImageCardHead image={myImage4} index={104} name={'IT_Responsabile_Angelo_Romano_angelodaroma00@gmail.com'} />
                    <p className='button' onClick={() => { handleButton('it') }} style={{ background: 'rgba(0, 2, 73, 0.7)' }}>Project Manager of <br />IT</p>
                </div>
                <div className='heads' onClick={() => { handleButton('comun') }} >
                    <ImageCardHead image={myImage5} index={105} name={'Communication_SocialMediaManager_Andra_Mihaila_andra.mihaila11@gmail.com'} />
                    <p className='button' onClick={() => { handleButton('comun') }} style={{ background: 'rgba(0, 2, 73, 0.7)' }}>Project Manager of <br />Communication</p>
                </div>
            </div>

            <div className='memberbody'>
                <div className={`panel empty ${panel == 'empty' ? 'show' : 'hide'}`}>
                    <div className='content'>
                        <p><br />Click Above to See the Team Members</p>
                    </div>
                </div>
                <div className={`panel acc ${panel == 'acc' ? 'show' : 'hide'}`}>
                    <div className='content'>
                        {imageList.map((image, index) =>
                            String(imageNames[index]).split('_')[0].toLowerCase() === 'acc' ?
                                (<ImageCard image={image} index={index} key={index} name={imageNames[index]} />)
                                :
                                null
                        )}
                    </div>
                </div>
                <div className={`panel dart ${panel == 'dart' ? 'show' : 'hide'}`}>
                    <div className='content'>
                        {imageList.map((image, index) =>
                            String(imageNames[index]).split('_')[0].toLowerCase() === 'dart' ?
                                (<ImageCard image={image} index={index} key={index} name={imageNames[index]} />)
                                :
                                null
                        )}
                    </div>
                </div>
                <div className={`panel ra ${panel == 'ra' ? 'show' : 'hide'}`}>
                    <div className='content'>
                        {imageList.map((image, index) =>
                            String(imageNames[index]).split('_')[0].toLowerCase() === 'ra' ?
                                (<ImageCard image={image} index={index} key={index} name={imageNames[index]} />)
                                :
                                null
                        )}
                    </div>
                </div>
                <div className={`panel it ${panel == 'it' ? 'show' : 'hide'}`}>
                    <div className='content'>
                        {imageList.map((image, index) =>
                            String(imageNames[index]).split('_')[0].toLowerCase() === 'it' ?
                                (<ImageCard image={image} index={index} key={index} name={imageNames[index]} />)
                                :
                                null
                        )}
                    </div>
                </div>
                <div className={`panel comun ${panel == 'comun' ? 'show' : 'hide'}`}>
                    <div className='content'>
                        {imageList.map((image, index) =>
                            String(imageNames[index]).split('_')[0].toLowerCase() === 'communication' ?
                                (<ImageCard image={image} index={index} key={index} name={imageNames[index]} />)
                                :
                                null
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}