import React, { useEffect, useRef, useState } from 'react';
import '../../../css/Projectdiscription.css';

export default function ProjectDiscription({ children, load }) {
    const [topic, setTopic] = useState('disc');
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollBehavior, setScrollBehavior] = useState('smooth');
    const changing = useRef(false);
    const wwdel = useRef();
    const goalsel = useRef();
    const fleetel = useRef();


    ////////////// Checking Screen width (desktop vs. phone)
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 780px)');
        const handleMediaQueryResize = () => {
            setScrollBehavior(mediaQuery.matches ? 'auto' : 'smooth');
        };
        setScrollBehavior(mediaQuery.matches ? 'auto' : 'smooth');

        mediaQuery.addListener(handleMediaQueryResize);
        return () => {
            mediaQuery.removeListener(handleMediaQueryResize);
        };
    }, []);

    ////////////// Setting scrollbar position checking interval
    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        const container = document.getElementById('projects');
        const intervalId = setInterval(() => {
            setScrollTop(container.scrollTop);
        }, 100);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    ////////////// Comparing scroll position to Divs
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


    ////////////// ReCalculating on image Loadings
    useEffect(() => {
        handleResize();
    }, [load])


    ////////////// Calculating Div offsetTops
    function handleResize() {
        wwdel.current = Math.floor(document.getElementById('wwd')?.offsetTop - document.getElementById('app').offsetTop - 60);
        goalsel.current = Math.floor(document.getElementById('goals')?.offsetTop - document.getElementById('app').offsetTop - 60);
        fleetel.current = Math.floor(document.getElementById('fleet')?.offsetTop - document.getElementById('app').offsetTop - 60);
    };


    ////////////// Left Button Handling
    function handleClickTopic(name) {
        if (document.getElementById(name)) {
            let targetSection = document.getElementById(name);
            targetSection.scrollIntoView({ block: 'start', behavior: scrollBehavior });
        }
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