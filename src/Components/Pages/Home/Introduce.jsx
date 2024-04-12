import React, { useEffect, useState } from 'react';
import '../../../css/Introduce.css';
import HorizontalGallery from './HorizontalGallery';

export default function Introduce() {
    const [numbers, setNumbers] = useState({
        since: 0,
        members: 0,
        projects: 0
    })
    const INCREMENET_TIME = 2000;

    useEffect(() => {
        setNumbers({
            since: 0,
            members: 0,
            projects: 0
        })
        setTimeout(() => {
            increment('since', 2015, INCREMENET_TIME);
            increment('members', 120, INCREMENET_TIME);
            increment('projects', 4, INCREMENET_TIME);
        }, 100);
    }, [])

    let increment = (variable, goal, time) => {
        setTimeout(() => {
            setNumbers((prev) => {
                if (prev[variable] + 1 < goal) {
                    increment(variable, goal, time);
                }
                return {
                    ...prev,
                    [variable]: prev[variable] + 1
                }
            });
        }, (time / goal));
    }


    return (
        <div className='introduce'>
            <p className='title1'>Team ICARUS PoliTO</p>

            <p className='increments'>
                Since <span className='numbers'>{numbers.since}</span>
                <br />with <span className='numbers'>{numbers.members}+</span> Members
                <br />Working on <span className='numbers'>{numbers.projects}</span> Projects</p>

            <div className='mid'>
                <div className='texts'>
                    <br /><br /><br /><br /><br />
                    <p className='title2'>WHO ARE WE?</p>

                    <br /><br /><br /><br />
                    <p className='expl'>ICARUS PoliTO is a Student Team of the Politecnico di Torino. Born in 2015 with a purely aerospace character, the Team has more than 120 effective members working on 4 main projects</p>
                </div>
                <HorizontalGallery />
            </div>
        </div>
    )
}