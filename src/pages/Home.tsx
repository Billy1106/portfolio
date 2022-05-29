import React, { useEffect } from 'react';
import '../index.css'
import '../assets/styles/cube.scss'
import '../assets/styles/intro.scss'
import Typist from 'react-text-typist';
import '../assets/styles/cube.scss'
import { useNavigate } from 'react-router';
import Aos from "aos"
import AboutMe from '../components/AboutMe';
function Home() {
  let navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>

      <div className="introduction">
        <div data-aos="fade" data-aos-delay="300">
          <div className="boxBase">
            <div className="top"></div>
            <div className="bottom"></div>
            <div className="front"></div>
            <div className="back"></div>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
        <p className='intro-name' data-aos="fade" >RYOTA KODA</p>
        <div className='intro-description' data-aos="fade">
          <Typist sentences={["Welcome to Ryota's portfolio", "Please contact me if you are interested"]}
            pauseTime={4000}
            typingSpeed={50} />
        </div>
       



      </div>
      <AboutMe/>

    </div>

  );
}

export default Home;
