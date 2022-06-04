import React, { useEffect, useState } from 'react';
import '../assets/styles/aboutMe.scss';
import "../assets/styles/cards.scss"
import myIcon from '../assets/img/my_avatar.svg';
import sakura from '../assets/img/sakura.png';
import 'aos/dist/aos.css'
import Aos from "aos"
import { useNavigate } from 'react-router-dom';
import ScrollToTop from './ScrollTop';
import { FaGithub, FaReact, FaPython, FaJava } from "react-icons/fa"
import { SiTypescript, SiFirebase, SiMaterialui, SiCplusplus, SiHtml5, SiCss3 } from "react-icons/si"
import { Skill } from '../Types';
import KivyIcon from '../assets/img/Kivy_logo.png';
import { Grid } from '@mui/material';
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
        skill: "TypeScript",
        description: "string",
        time: 7,
        percentage: 70,
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
        id: 5,
        skill: "Firebase",
        description: "string",
        time: 1,
        percentage: 50,
        tech: <SiFirebase style={{ color: "rgb(245, 130, 13)" }} />,
    }
    , {
        id: 6,
        skill: "HTML",
        description: "string",
        time: 2,
        percentage: 60,
        tech: <SiHtml5 style={{ color: "rgb(80, 80, 255)" }} />,
    }
    , {
        id: 8,
        skill: "CSS",
        description: "string",
        time: 2,
        percentage: 60,
        tech: <SiCss3 style={{ color: "rgb(80, 80, 255)" }} />,
    }
    , {
        id: 7,
        skill: "C++",
        description: "string",
        time: 2,
        percentage: 60,
        tech: <SiCplusplus style={{ color: "rgb(80, 80, 255)" }} />,
    }
]
const AboutMe = () => {
    let navigate = useNavigate();
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);


    const [size, setSize] = useState(window.innerWidth >= 1400?600:600 - 0.5 * (1400 - window.innerWidth));
    const handleScreenSize = () => {
        if (window.innerWidth >= 1400) {
            setSize(600);
        } else {
            setSize(600 - 0.5 * (1400 - window.innerWidth));
        }


    }
    window.addEventListener('resize', handleScreenSize);

    return (
        <div>

            <div className="aboutMe">

                <div className='my-info' data-aos="slide-right">

                    <p className='title' >About me</p>
                    <img src={sakura} style={{ width: size }} className="sakura" />
                    <div className='whoami' >
                        <div data-aos="fade-up" data-aos-delay="2000">
                            <p className='introduce' >Hi, I'm Ryota Koda</p>
                            <p className='description' >I'm a Japanese Software Engineer based in Vancouver.I'm currently a senior Computer Science student at The University of British Columbia (UBC)
                                and anticipated to graduate in May, 2024, looking for internship with passions in software engineering and solving problems. </p>
                            <p className='description' >Skills:</p>

                            <div className="skills">
                                {skillList.map((value) => {
                                    return (
                                        <div className="skill" style={{ fontSize: 30,textAlign:'center' }}>

                                            {value.tech}
                                            <p className='name'>{value.skill}</p>

                                        </div>
                                    );
                                })}

                            </div>

                            <p className='additional-skills' >and Git, Node, Numpy, Kivy, MaterialUI etc...</p>


                            <p className='highlight' >Here are a Few Highlights:</p>
                            <ul>
                                <li className='description' >Well-Organized person, problem solver with high attention to detail</li>
                                <li className='description' >Fan of Soccer, outdoor activities, games and Japanese pop culture</li>
                                <li className='description' >High proficiency in English, Japanese, and elementary proficiency in Chinese and Korean</li>
                            </ul>
                            <div className="boxes">
                                <button onClick={() => { navigate("/History") }}> History </button>
                                <button onClick={() => { navigate("/Projects") }}> Projects </button>
                                <button onClick={() => { navigate("/Contact") }}> Contact </button>
                            </div>


                        </div>

                    </div>

                </div>

            </div>
            <ScrollToTop />
        </div>
    )
}
export default AboutMe;
