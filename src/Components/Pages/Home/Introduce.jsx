import React, { useEffect, useState } from 'react';
import '../../../css/Introduce.css';
import HorizontalGallery from './HorizontalGallery';

export default function Introduce() {
    const [numbers, setNumbers] = useState({
        since: 1800,
        members: 0,
        projects: 0
    })

    ////// starting increment
    useEffect(() => {
        setTimeout(() => {
            const INCREMENET_TIME = 2000;
            increment(INCREMENET_TIME);
        }, 100);
    }, [])

    let increment = (time) => {
        let intSince = 1900;
        let intMembers = 0;
        let intProjects = 0;

        function timer(int, name, goal, time) {
            setTimeout(() => {
                setNumbers((prev) => {
                    return {
                        ...prev,
                        [name]: int
                    }
                });
                int++;
                if (int < goal) {
                    timer(int, name, goal, time);
                }
            }, time);
        }

        timer(intSince, 'since', 2015, time / 115);
        timer(intMembers, 'members', 120, time / 120);
        timer(intProjects, 'projects', 4, time / 4);
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

                    <br /><br /><br />
                    <p className='expl'>ICARUS PoliTO is a Student Team of the Politecnico di Torino. Born in 2015 with a purely aerospace character, the Team has more than 120 effective members working on 4 main projects</p>
                </div>
                <div className='galleryCont'>
                    <HorizontalGallery height={275} />
                    <HorizontalGallery height={150} />
                </div>
            </div>
        </div>
    )
}