import React, { useState } from 'react';
import '../../../css/MemberPhotos.css';
import ImageCard from './ImageCard';
import myImage1 from '../../../Assets/Managers/ACC_MDV_Matteo_Tilocca_matteotilocca04@gmail.com.png';
import myImage2 from '../../../Assets/Managers/DART_Manager_Matteo_Cafaro_&&&&&&.png';
import myImage3 from '../../../Assets/Managers/RA_ProjectManagerRA_Stefano_Zappone_stefano.zappone@gmail.com.png';
import myImage4 from '../../../Assets/Managers/IT_Responsabile_Angelo_Romano_angelodaroma00@gmail.com.png';
import myImage5 from '../../../Assets/Managers/Communication_SocialMediaManager_Andra_Mihaila_andra.mihaila11@gmail.com.png';



export default function MemberPhotos() {
    const [panel, setPanel] = useState('acc');

    const images = require.context('../../../Assets/Members', true);
    const imageList = images.keys().map(image => images(image));
    const imageNames = images.keys().map(image => {
        const imageNameWithExtension = image.split('/').pop();
        const imageName = imageNameWithExtension.replace(/\.[^.]+$/, "");
        return imageName;
    });

    const handleButton = ({ target }) => {
        setPanel(target.value);
    }

    return (
        <div className='memberphotos'>
            <div className='memberhead'>
                <ImageCard image={myImage1} index={101} height={300} name={'ACC_MDV_Matteo_Tilocca_matteotilocca04@gmail.com.png'} />
                <ImageCard image={myImage2} index={102} height={300} name={'DART_Manager_Matteo_Cafaro_&&&&&&.png'} />
                <ImageCard image={myImage3} index={103} height={300} name={'RA_ProjectManagerRA_Stefano_Zappone_stefano.zappone@gmail.com.png'} />
                <ImageCard image={myImage4} index={104} height={300} name={'IT_Responsabile_Angelo_Romano_angelodaroma00@gmail.com.png'} />
                <ImageCard image={myImage5} index={105} height={300} name={'Communication_SocialMediaManager_Andra_Mihaila_andra.mihaila11@gmail.com.png'} />
                <button className='button' onClick={handleButton} value='acc' style={{ background: 'rgba(255, 255, 0, 0.65)' }}>ACC...</button>
                <button className='button' onClick={handleButton} value='dart' style={{ background: 'rgba(255, 0, 0, 0.65)' }}>DART...</button>
                <button className='button' onClick={handleButton} value='ra' style={{ background: 'rgba(0, 0, 255, 0.65)' }}>RA...</button>
                <button className='button' onClick={handleButton} value='it' style={{ background: 'rgba(0, 0, 0, 0.65)' }}>IT...</button>
                <button className='button' onClick={handleButton} value='comun' style={{ background: 'rgba(128, 0, 128, 0.65)' }}>Communication...</button>
            </div>
            <div className='memberbody'>
                <div className={`panel acc ${panel == 'acc' ? 'show' : 'hide'}`}>
                    <div className='content'>
                        {imageList.map((image, index) =>
                            String(imageNames[index]).split('_')[0].toLowerCase() === 'acc' ?
                                (<ImageCard image={image} index={index} height={240} key={index} name={imageNames[index]} />)
                                :
                                null
                        )}
                    </div>
                </div>
                <div className={`panel dart ${panel == 'dart' ? 'show' : 'hide'}`}>
                    <div className='content'>
                        {imageList.map((image, index) =>
                            String(imageNames[index]).split('_')[0].toLowerCase() === 'dart' ?
                                (<ImageCard image={image} index={index} height={240} key={index} name={imageNames[index]} />)
                                :
                                null
                        )}
                    </div>
                </div>
                <div className={`panel ra ${panel == 'ra' ? 'show' : 'hide'}`}>
                    <div className='content'>
                        {imageList.map((image, index) =>
                            String(imageNames[index]).split('_')[0].toLowerCase() === 'ra' ?
                                (<ImageCard image={image} index={index} height={240} key={index} name={imageNames[index]} />)
                                :
                                null
                        )}
                    </div>
                </div>
                <div className={`panel it ${panel == 'it' ? 'show' : 'hide'}`}>
                    <div className='content'>
                        {imageList.map((image, index) =>
                            String(imageNames[index]).split('_')[0].toLowerCase() === 'it' ?
                                (<ImageCard image={image} index={index} height={240} key={index} name={imageNames[index]} />)
                                :
                                null
                        )}
                    </div>
                </div>
                <div className={`panel comun ${panel == 'comun' ? 'show' : 'hide'}`}>
                    <div className='content'>
                        {imageList.map((image, index) =>
                            String(imageNames[index]).split('_')[0].toLowerCase() === 'communication' ?
                                (<ImageCard image={image} index={index} height={240} key={index} name={imageNames[index]} />)
                                :
                                null
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}