import React from 'react';
import '../../../css/ACC.css';
import Projects from './Projects';

export default function ACC() {

    return (
        <Projects>
            <div className='subject' id='disc'>
                <p className='title'>ACC project - Air Cargo Challenge</p>
                <br />
                <p>
                    Our goal is to develop cargo UAVs to take part in the Air Cargo Challenge, an    international competition among university teams from all over the world, which takes place every two years.
                    <br /><br /><br />
                    For each edition of ACC, we have to develop a new aircraft from the ground up, taking care of all of the necessary steps: from the design of each part, to the construction of the airmodel, and finally to the flight testing campaign.
                    <br /><br /><br />
                    The goal of the Air Cargo Challenge is the development of cargo UAVs that can perform a certain mission. The scoring parameters include how much payload our airmodels can transport, how fast they go, and how efficient they are. There are also bonus points for special features, like the ability of our aircraft to take-off from a short runway, or the task for our team members to load the payload in the airplane as fast as possible!
                    <br /><br /><br />
                    Each edition of the Air Cargo Challenge is organized by the team that won the previous edition, which is in charge of hosting the competition and writing the regulations.
                </p>
            </div>
            <div className='subject' id='wwd'>
                <p className='title'>What We Do</p>
                <p>
                    To design a new prototype, we start by carefully analyzing the regulations, in order to understand the design target that could best optimize the performance and the score of our aircraft. We use tools such as Matlab, Open VSP, XFLR5, Catia V5 and Solidworks to come up with a preliminary design. Then, we optimize our design using more powerful calculation tools like STAR CCM+, for CFD analyses, and the Altair HyperWorks suite to perform structural analyses on our configurations.
                    <br /><br /><br />
                    After the design phase is finalized, we proceed with the manufacturing of our model. We use innovative materials and techniques, such as advanced composite materials, specifically designed using FEM-backed composite-design tools and topologically optimized to achieve the best structural performance with minimum weight, and additive manufacturing for the manufacturing of the parts that have the most complex shapes.
                    <br /><br /><br />
                    All parts of our airplanes are manufactured by members of our team in our laboratory!
                    <br /><br /><br />
                    After the prototypes are complete, we usually perform very intense flight testing campaigns, to perfect the detailed design and the competition strategy.
                    <br /><br /><br />
                    In a nutshell, we try to be as flexible and forward thinking as possible. The key is to think outside the box, so as to experiment new and innovative solutions for airplane design that we believe might give us an edge in the competition. Deadlines are always quite tight, so efficiency and proficient communication play a key role in our work. That’s why ACC is such a tight and well-integrated group, driven by competitiveness and passion for flight.
                </p>
            </div>
            <div className='subject' id='goals'>
                <p className='title'>Our Goals</p>
                <p>
                    ACC 2024 will be held in Aachen (Germany). According to the regulations, we have to develop a cargo UAV that can transport billiard balls representing “passengers”. The flight mission is composed of four phases: take-off and climb, a maximum efficiency task, a maximum speed task, and landing, and we are evaluated based on the performance during each task, and on how many balls we carry.
                </p>
            </div>
            <div className='subject' id='fleet'>
                <p className='title'>Our Fleet</p>
                <p>
                    So far, we have taken part in three editions of the Air Cargo Challenge: 2017, 2019, 2022 and we are now preparing for ACC 2024.
                    <br /><br /><br />
                    Anubi – ACC 2017
                    <br />
                    Anubi was developed to participate in ACC 2019 in Zagreb. It was the first ever airplane to be built by Icarus Team. Today, it is being used by the PhotoNext research team in the Department of Mechanical and Aerospace Engineering at PoliTO, who have installed new and innovative equipment on it, including optical fiber sensors, to perform structural monitoring on the aircraft in real time during its flight.
                    <br /><br /><br />
                    Vega – ACC 2019
                    <br />
                    Vega is the aircraft model we have developed for the Air Cargo Challenge 2019 in Stuttgart. It is the biggest UAV that has been built in the ACC section of our team, and it was the one that achieved the best ranking during the competition.
                    <br /><br /><br />
                    Ichor – ACC 2022
                    <br />
                    Ichor is the latest airplane our team has built. It was developed to participate to the Air Cargo Challenge 2022 in Munchen, and its mission, according to the regulations, is to transport blood bags to simulate an emergency situation in which medial assistance is needed in areas that are difficult to reach.
                    <br />
                    It is the fastest airplane in fleet of our team, with peek velocities of over 120 km/h.
                </p>
            </div>
        </Projects>
    )
}