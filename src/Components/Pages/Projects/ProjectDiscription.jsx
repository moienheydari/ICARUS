import React, { useEffect, useRef, useState } from 'react';
import '../../../css/Projectdiscription.css';

export default function ProjectDiscription() {
    const [topic, setTopic] = useState('disc');
    const [offset, setOffset] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const changing = useRef(false);
    const wwdnum = useRef();
    const goalsnum = useRef();
    const fleetnum = useRef();

    ////////////// Scrolling to the "offset"
    useEffect(() => {
        const container = document.getElementById('right');
        container.scrollTop = offset;
    }, [offset]);

    ////////////// Setting nums and interval
    useEffect(() => {
        wwdnum.current = Math.floor(document.getElementById('wwd').offsetTop - document.getElementById('right').offsetTop);
        goalsnum.current = Math.floor(document.getElementById('goals').offsetTop - document.getElementById('right').offsetTop);
        fleetnum.current = Math.floor(document.getElementById('fleet').offsetTop - document.getElementById('right').offsetTop);
        const container = document.getElementById('right');
        const intervalId = setInterval(() => {
            if (!changing.current) {
                setScrollTop(container.scrollTop);
            }
        }, 100);
        return () => clearInterval(intervalId);
    }, []);

    ////////////// Checking scroll position
    useEffect(() => {
        if (wwdnum.current <= scrollTop && scrollTop < goalsnum.current) {
            setTopic('wwd');
        } else {
            if (goalsnum.current <= scrollTop && scrollTop < fleetnum.current) {
                setTopic('goals');
            } else {
                if (fleetnum.current <= scrollTop) {
                    setTopic('fleet');
                } else {
                    setTopic('disc');
                }
            }
        }
    }, [scrollTop])

    function handleClickTopic(name) {
        changing.current = true;
        setTopic(name);
        scrollToGoal(name);
    }

    function scrollToGoal(name) {
        const container = document.getElementById('right');
        const paragraph = document.getElementById(name);
        const goal = Math.floor(paragraph.offsetTop - container.offsetTop);
        const now = Math.floor(container.scrollTop);
        const interval = goal - now;
        const time = 400;  //////////////////////////////////////////// TIME HERE ///////
        increment(interval, now, (time / interval));
    }

    function increment(interval, now, tempo) {
        const coefficient = 20; /////////////////////////////////////// COEFFICIENT HERE ///////
        if (Math.abs(interval) > coefficient) {
            let newNow = now + (coefficient * (interval / Math.abs(interval)));
            setOffset(newNow);
            let intervalNew = (Math.abs(interval) - coefficient) * (interval / Math.abs(interval));
            setTimeout(() => {
                increment(intervalNew, newNow, tempo);
            }, tempo * coefficient);
        } else {
            let newNow = now + interval;
            setOffset(newNow);
            changing.current = false;
            setTimeout(() => {
                let targetSection = document.getElementById('projectdiscription');
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }, 10);
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
                <div className='subject' id='disc'>
                    <p className='title'>Discription</p>
                    <p>adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdaadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwaasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdasdadawfawfwaf<br />adwdwaf<br />adwdwasdaadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwaasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwas
                    </p>
                </div>
                <div className='subject' id='wwd'>
                    <p className='title'>What We Do</p>
                    <p>adwadwdasdasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdaadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwaasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdasdadawfawfwaf<br />adwdwaf<br />adwdwasdaadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwaasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwas
                    </p>
                </div>

                <div className='subject' id='goals'>
                    <p className='title'>Our Goals</p>
                    <p>adawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdawasdaasdadaasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />asdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdaadwdwasdadawfawfwaf<br />adwdwasdawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />aasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadwdwasdadawfawfwaf<br />adwdwasdaasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdaasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdaasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdaasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwas</p>
                </div>
                <div className='subject' id='fleet'>
                    <p className='title'>Our Fleet</p>
                    <p>wfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdaasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdaasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdaasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdaasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdasdadawfawfwaf<br />adwdwad</p><p>adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdaasdadawfawfwaf<br />adwdwasdadawfawfwaf<br />adwdwasdadawfawfwaf<br /></p>
                </div>


            </div>
        </div>
    )
}