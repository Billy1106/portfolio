import React, { useEffect } from 'react';
import '../index.css'
import '../assets/styles/cube.scss'
import '../assets/styles/intro.scss'
import Typist from 'react-text-typist';
import '../assets/styles/cube.scss'
import { useNavigate } from 'react-router';
import Aos from "aos"
import ScrollToTop from '../components/ScrollTop';
import About from './About';
function Home() {
  let navigate = useNavigate();
  useEffect(()=>{
    Aos.init({duration:2000});
},[]);
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
          <button className='intro-name' data-aos="fade" onClick={()=>navigate("/About")}>RYOTA KODA</button>
          <div className='intro-description' data-aos="fade">
            <Typist sentences={["Welcome to Ryota's portfolio", "Please contact me if you are interested"]}
              pauseTime={4000}
              typingSpeed={50} />
          </div>
          <script src="particles.min.js"></script>
          <script src="../assets/styles/particles.js"></script>
        </div>
        <ScrollToTop />
       
    </div>
   
  );
}

export default Home;
