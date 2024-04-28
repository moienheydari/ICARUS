import React, { useEffect, useRef, useState } from 'react';
import '../../../css/Projectdiscription.css';

export default function ProjectDiscription({ children, load }) {
    const [topic, setTopic] = useState('disc');
    const [scrollTop, setScrollTop] = useState(0);
    const changing = useRef(false);
    const wwdel = useRef();
    const goalsel = useRef();
    const fleetel = useRef();



    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        const container = document.getElementById('projects');
        const intervalId = setInterval(() => {
            if (!changing.current) {
                setScrollTop(container.scrollTop);
            }
        }, 100);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    ////////////// Checking scroll position
    useEffect(() => {
        if (wwdel.current <= scrollTop && scrollTop < goalsel.current) {
            setTopic('wwd');
        } else {
            if (goalsel.current <= scrollTop && scrollTop < fleetel.current) {
                setTopic('goals');
            } else {
                if (fleetel.current <= scrollTop) {
                    setTopic('fleet');
                } else {
                    setTopic('disc');
                }
            }
        }
    }, [scrollTop, changing]);

    useEffect(() => {
        handleResize();
    }, [load])

    function handleResize() {
        wwdel.current = Math.floor(document.getElementById('wwd').offsetTop - document.getElementById('app').offsetTop) - 55;
        goalsel.current = Math.floor(document.getElementById('goals').offsetTop - document.getElementById('app').offsetTop) - 55;
        fleetel.current = Math.floor(document.getElementById('fleet').offsetTop - document.getElementById('app').offsetTop) - 55;
    };

    function handleClickTopic(name) {
        changing.current = true;
        setTopic(name);
        if (document.getElementById(name)) {
            let targetSection = document.getElementById(name);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => {
            setTopic(name);
            changing.current = false;
        }, 700);
    }

    return (
        <div className='projectdiscription' id='projectdiscription'>
            <div className='left'>
                <div className={`topic ${topic === 'disc' ? 'show' : ''}`} onClick={() => { handleClickTopic('disc') }}><p>Discription</p></div>
                <div className={`topic ${topic === 'wwd' ? 'show' : ''}`} onClick={() => { handleClickTopic('wwd') }}><p>What We Do</p></div>
                <div className={`topic ${topic === 'goals' ? 'show' : ''}`} onClick={() => { handleClickTopic('goals') }}><p>Our Goals</p></div>
                <div className={`topic ${topic === 'fleet' ? 'show' : ''}`} onClick={() => { handleClickTopic('fleet') }}><p>Our Fleet</p></div>

            </div>
            <div className='right' id='right'>
                {children}
            </div>
        </div>
    )
}