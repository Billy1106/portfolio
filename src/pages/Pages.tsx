import React from 'react'
import ReactDOM from 'react-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import History from '../pages/History';
import ErrorPage from '../pages/ErrorPage';
import Contact from '../pages/Contact'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import ScrollToTop from "../components/ScrollTop";

const Pages = () => {
  const location = useLocation();
  return (
    <div>
      <Router>
      
        <Header />
       
        <TransitionGroup component={null}>
          <CSSTransition
            classNames="fade"
            timeout={300}
            key={location.key}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/History" element={<History />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      
      </Router>
    </div>
  )
}
export default Pages;
