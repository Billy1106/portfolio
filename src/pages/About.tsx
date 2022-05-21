import React, { useEffect, useState } from 'react';
import '../assets/styles/about.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Event, Skill } from '../Types'

import "../assets/styles/cards.scss"
import { FaGithub, FaReact, FaPython, FaJava } from "react-icons/fa"
import { SiTypescript, SiFirebase, SiMaterialui, SiCplusplus } from "react-icons/si"
import KivyIcon from '../assets/img/Kivy_logo.png';
import Particles from "react-tsparticles";

import 'aos/dist/aos.css'
import Aos from "aos"
import { useNavigate } from 'react-router';
import ScrollToTop from '../components/ScrollTop';
const skillList: Skill[] = [
    {
        id: 0,
        skill: "Java",
        description: "string",
        time: 4,
        percentage: [{ type: "Java", level: 85 }],
        tech: <FaJava style={{ color: 'red' }} />,
    }, {
        id: 1,
        skill: "Python",
        description: "string",
        time: 7,
        percentage: 70,
        tech: <FaPython style={{ color: 'yellow' }} />,
    }, {
        id: 2,
        skill: "Kivy",
        description: "string",
        time: 7,
        percentage: 70,
        tech: <img src={KivyIcon} alt="Logo" className='cardIconImg' />,
    }, {
        id: 3,
        skill: "Typescript",
        description: "string",
        time: 1,
        percentage: 60,
        tech: <SiTypescript style={{ color: "rgb(0, 122, 204)" }} />,
    }, {
        id: 4,
        skill: "React",
        description: "string",
        time: 1,
        percentage: 60,
        tech: <FaReact style={{ color: "rgba(97, 219, 251)" }} />,
    }
    , {
        id: 4,
        skill: "Firebase",
        description: "string",
        time: 1,
        percentage: 50,
        tech: <SiFirebase style={{ color: "rgb(245, 130, 13)" }} />,
    }
    , {
        id: 5,
        skill: "C++",
        description: "string",
        time: 2,
        percentage: 60,
        tech: <SiCplusplus style={{ color: "rgb(80, 80, 255)" }} />,
    }
]

const skills = [
    {
        type: "Java",
        level: 85,
        color: {
            "bar": "#fff",
            "title": {
                "text": "#fff",
                "background": "##fff"
            }
        }
    },
    {
        type: "Python",
        level: 75,
        color: {
            "bar": "#3498db",
            "title": {
                "text": "#2980b9",
                "background": "#2980b9"
            }
        }
    },
];


const About = () => {
    let navigate = useNavigate();
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>

            <div className="about">

                <div className="introduction-container" data-aos="fade">

                    <div className='main-container' data-aos="fade-right">
                        <p className='name'>Hi,<br></br> I'm Ryota Koda</p>
                        <p className='subtitle'>A Third-year Computer Science Major at The University of British Columbia</p>
                        <p className='subtitle'>Interested in Software Engineering, working with Java, Python,and Javascript (React.js)</p>
                    </div >

                    <Particles
                        id='tsparticles'
                        params={{
                            fullScreen: false,
                            fpsLimit: 60,
                            interactivity: {
                                events: {

                                    onHover: {
                                        enable: true,
                                        mode: "attract",
                                    },
                                    resize: true,
                                },
                            },

                            particles: {
                                number: {
                                    value: 50,
                                },
                                color: {
                                    value: "#fff"
                                },
                                links: {
                                    enable: true,
                                    color: "#fff",
                                    distance: 130
                                },
                                move: {
                                    speed: 0.4,
                                    enable: true,

                                    outMode: "bounce",
                                }

                            }
                        }}
                    />


                </div>

                <div className='my-info'>

                    <div className='whoami' data-aos="fade-right">
                        <p className='title' >About me</p>
                        <p className='description'>I am a senior Computer Science student at The University of British Columbia (UBC)
                            and anticipated to graduate in May, 2023. Currently, looking for a 2022 summer internship with passions in software engineering and solving problems. </p>
                        <p className='description'>Well-Organized person, problem solver independent employee with high attention to detail. Fan of Soccer, outdoor activities, Japanse pop culture and games.</p>
                        <p className='description'>High proficiency in English, Japanese, and elementary proficiency in Chinese and Korean with an intercultural point of view</p>
                        <button className='contact-me' onClick={() => { navigate("/Contact") }}>Let's make something special</button>
                        

                    </div>
                    <div className="skill" >
                            <div className='skillBars' data-aos="fade">

                                <div className='chart' >
                                    <p>Java</p>
                                    <footer >
                                        <div className='java' style={{ background: "white" } }></div>
                                    </footer>
                                </div>
                                <div className='chart'>
                                    <p>Python</p>
                                    <footer>
                                        <div className='python' style={{ background: "white" }}></div>
                                    </footer>
                                </div>
                                <div className='chart'>
                                    <p>Kivy</p>
                                    <footer>
                                        <div className='kivy' style={{ background: "white" }}></div>
                                    </footer>
                                </div>
                                <div className='chart'>
                                    <p>HTML/CSS</p>
                                    <footer>
                                        <div className='html-css' style={{ background: "white" }}></div>
                                    </footer>
                                </div>
                                <div className='chart'>
                                    <p>React</p>
                                    <footer>
                                        <div className='react' style={{ background: "white" }}></div>
                                    </footer>
                                </div>
                                <div className='chart'>
                                    <p>Typescript</p>
                                    <footer>
                                        <div className='typescript' style={{ background: "white" }}></div>
                                    </footer>
                                </div>
                                <div className='chart'>
                                    <p>Firebase</p>
                                    <footer>
                                        <div className='firebase' style={{ background: "white" }}></div>
                                    </footer>
                                </div>
                                <div className='chart'>
                                    <p>C/C++</p>
                                    <footer>
                                        <div className='c-plus' style={{ background: "white" }}></div>
                                    </footer>
                                </div>
                            </div>
                        </div>


                </div>

            </div>
            <ScrollToTop />
        </div>
    )
}
export default About;
