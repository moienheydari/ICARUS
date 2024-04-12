import React, { useEffect, useRef, useState } from 'react';
import '../../../css/Projectdiscription.css';

export default function ProjectDiscription({ children }) {
    const [topic, setTopic] = useState('disc');
    const [scrollTop, setScrollTop] = useState(0);
    const changing = useRef(false);
    const wwdel = useRef();
    const goalsel = useRef();
    const fleetel = useRef();


    useEffect(() => {
        ////////////// When Opened with <Link>
        window.scrollTo(0, 0);

        ////////////// Setting element positions 
        if (document.getElementById('wwd') && document.getElementById('goals') && document.getElementById('fleet')) {
            wwdel.current = Math.floor(document.getElementById('wwd').offsetTop - document.getElementById('projects').offsetTop) - 25;
            goalsel.current = Math.floor(document.getElementById('goals').offsetTop - document.getElementById('projects').offsetTop) - 25;
            fleetel.current = Math.floor(document.getElementById('fleet').offsetTop - document.getElementById('projects').offsetTop) - 25;
        }

        ////////////// Setting scrollbar eventlistener
        let isThrottled = false;
        const scrollHandler = () => {
            if (!isThrottled && !changing.current) {
                setScrollTop(window.scrollY);
                isThrottled = true;
                setTimeout(() => {
                    isThrottled = false;
                }, 100);
            }
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
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