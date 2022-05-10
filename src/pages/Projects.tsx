import React, { useEffect, useState } from 'react'
import "../assets/styles/projects.scss"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import YourtodoImg from '../assets/img/YourTodo.jpeg';
import PortfolioImg from '../assets/img/my-portfolio.png';
import VideoGenImg from '../assets/img/VideoGenerator.png';
import ComingSoon from '../assets/img/coming_soon.jpg';
import KivyIcon from '../assets/img/Kivy_logo.png';
import Animation from '../components/Animation'
import { Project } from '../Types';
import { FaGithub, FaReact, FaPython, FaJava } from "react-icons/fa"
import { SiTypescript, SiFirebase, SiMaterialui } from "react-icons/si"
import "../assets/styles/cards.scss"
import 'aos/dist/aos.css'
import Aos from "aos"
import ScrollToTop from '../components/ScrollTop';

const projectList: Project[] = [
    {
        id: 0,
        title: "Portfolio",
        description: "My portfolio",
        img: PortfolioImg,
        techs: [<FaReact style={{ color: "rgba(97, 219, 251)" }} />, <SiTypescript style={{ color: "rgb(0, 122, 204)" }} />, <SiFirebase style={{ color: "rgb(245, 130, 13)" }} />],
        link: "https://github.com/Billy1106/portofolio",
    },
    {
        id: 1,
        title: "YourToDOo",
        description: "TODO list web application that you can add, remove, and check the completed task easily.",
        img: YourtodoImg,
        techs: [<FaReact style={{ color: "rgba(97, 219, 251)" }} />, <SiTypescript style={{ color: "rgb(0, 122, 204)" }} />, <SiFirebase style={{ color: "rgb(245, 130, 13)" }} />, <SiMaterialui style={{ color: "rgb(0, 160, 204)" }} />],
        link: "https://github.com/Billy1106/YourTodo",
    },
    {
        id: 2,
        title: "Fake Video Generator",
        description: "A video generator that creates intentional lags and image blur to make an execuse to turn off your camera while zooming.",
        img: VideoGenImg,
        techs: [<FaPython style={{ color: 'yellow' }} />, <img src={KivyIcon} alt="Logo" width="15%" height="77%" />],
        link: "https://github.com/Billy1106/portofolio",
    },
    {
        id: 3,
        title: "Live Streaming Clipper",
        description: "Analyses the rate of comments on YouTube live stream and generate clips.",
        img: ComingSoon,
        techs: [<FaGithub style={{ color: 'blue' }} />, <FaPython style={{ color: 'yellow' }} />],
        link: "https://github.com/Billy1106",
    },
    {
        id: 4,
        title: "DNS Lookup Tool",
        description: "A DNS client capable of resolving DNS queries of type A, AAAA, MX, NS, and CNAME. Built during the university course.",
        img: ComingSoon,
        techs: [<FaGithub style={{ color: 'blue' }} />, <FaJava style={{ color: 'white' }} />],
        link: "https://github.com/Billy1106",
    }
]

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

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
            <div className='projects'  >
                <div className='title' style={{ opacity: opacity }} >
                    <div className='animate'>
                    <p style={{fontSize:"60px"}}>Works and Projects</p>
                    <p style={{fontSize:"20px",opacity:0.5,paddingBottom:50}}>My personal and academic projects.</p>
                    <a href="#cards"><span></span></a>
                    </div>
                </div>
                

                <Grid container className="cards" id="cards">
                
                    {
                        projectList.map((e) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={e.id}>

                                    <Card className="card" >
                                        <CardActionArea onClick={() => window.open(e.link, "_blank")}>

                                            <CardMedia
                                                component="img"
                                                image={e.img}
                                                alt={e.title}
                                                style={{ height: 180 }}
                                                className='cardImg' />
                                            <CardContent>
                                                <div className="cardTitle">
                                                    <Typography gutterBottom variant="h5" component="div" className="productTitle">
                                                        {e.title}
                                                    </Typography>
                                                    <FaGithub className='iconIcon' />
                                                </div>
                                                <Typography variant="body2" color="text.secondary" className='cardDescription'>
                                                    {e.description}
                                                </Typography>
                                                <div className='cardTechs'>
                                                    {e.techs.map((t) => {
                                                        return <div className='cardTech'>{t}</div>;
                                                    })}
                                                </div>

                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>


                            )
                        })
                    }

                </Grid>


            </div>
            <ScrollToTop />
        </div>
        
    )
}

export default Projects;