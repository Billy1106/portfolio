import React, { useEffect, useState } from 'react'
import "../assets/styles/works.scss"
import { Event } from '../Types'
import Animation from "../components/Animation"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ScrollToTop from '../components/ScrollTop';

const eventLists: Event[] = [
    {
        id: 1,
        date: "July 2018 - August 2018",
        organization: "Sigfoss Corp",
        position:
            "Internship",
        description:
            "Developed Face Recognition Software with Yolov3(Python) \nCreated training data for the machine learning algorithm.",
        isShowIcon: true,
        icon: <WorkIcon/>,
        iconColor: "#fff",
    },
    {
        id: 2,
        date: "July 2019 - September 2019",
        organization: "Cybergym Corp",
        position:
            "Internship",
        description:
            "Worked as interpreter of the company to communicate with headquarters\nGained proficiency in using metasploit frameworks to conduct penetration testing and vulnerability scanning.",

        isShowIcon: true,
        icon: <WorkIcon/>,
        iconColor: "#fff",
    },
    {
        id: 3,
        date: "September 2019 - Present",
        organization: "University of British Columbia",
        position:
            "Undergraduate",
        description:
            "Science Faculty, Computer Science Major \nDeveloping a strong understanding of Data structure and Algorithm, Computer Architecture and Database.",
        isShowIcon: true,
        icon: <SchoolIcon/>,
        iconColor: "#fff",
    },
    {
        id: 4,
        date: "August 2021 - Present",
        organization: "Twilight Traveler Corp",
        position: "Volunteer",
        description:
            "Delivering a 1-hour presentation about the universities in Canada to classes of 20-30 Japanese high school students who are interested in studying abroad after their graduation.",
        isShowIcon: true,
        icon: <WorkIcon/>,
        iconColor: "#fff",
    },
    {
        id: 5,
        date: "September 2021 - Present",
        organization: "CoderDojo OME",
        position: "Coding Mentor",
        description:
            "Teaching basic coding skills through Scratch and Python to young people between 7 and 17.",
        isShowIcon: true,
        icon: <CastForEducationIcon/>,
        iconColor: "#fff",
    },
    {
        id: 6,
        date: "September 2021 - Present",
        organization: "Kidsdoor",
        position: "English Teacher",
        description:
            "Teaching English once in a week to high school age children suffering from poverty due to welfare or single parent families.",
        isShowIcon: true,
        icon: <VolunteerActivismIcon/>,
        iconColor: "#fff",
    },
];

const Works = () => {
    const [opacity, setOpacity] = useState(1);
    const handleScroll = () => {
        if(window.scrollY <= 400){
            setOpacity( 1 - window.scrollY/400);
        }else{
            setOpacity(0);
        }
    }

    window.addEventListener('scroll',handleScroll);
    return (
        <div>
            <div className='works'  >
                <div style={{opacity:opacity}}>
                    <div className='title'>
                    <p>History</p>
                    <p className='subtitle'>My work experience and volunteer</p>
                    </div>
                </div>
                <Animation>
          
                    <div className='timeline' data-aos="fade" data-aos-duration="2000">
                        <VerticalTimeline>
                            {eventLists.map(e => {
                                return (
                                    <VerticalTimelineElement
                                        key={e.id}
                                        iconStyle={{
                                            background: "#3a3a3f",
                                            color: e.isShowIcon ? e.iconColor : "fff",
                                          }}
                                        icon={e.isShowIcon ? e.icon : ""}
                                        date={e.date}
                                        contentStyle={{ background: "#eeeeee", color: "#3a3a3f", }}
                                        dateClassName={"date"}
                                        
                                    >
                                        <div className='organization'>
                                        <h3 className='vertical-timeline-element-title'>{e.organization}</h3>
                                        <p className='vertical-timeline-element-subtitle position'>{e.position}</p>
                                        </div>
                                        
                                        <p className='vertical-timeline-element-subtitle description'>{e.description.split('\n').map(t => (<div>{t}</div>))}</p>
                                    </VerticalTimelineElement>
                                )
                            })}

                        </VerticalTimeline>
                    </div>
                </Animation>
            </div>
            <ScrollToTop />
        </div>
    )
}

export default Works;
