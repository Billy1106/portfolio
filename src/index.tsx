import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import History from './pages/History';
import ErrorPage from './pages/ErrorPage';
import { BrowserRouter as Router,Routes,Route,useLocation} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
ReactDOM.render(
  <Router>
  <Header/>
  <TransitionGroup>
    <CSSTransition
          classNames="fade"
          timeout={300} 
        >
        <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/History" element={<History/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    </CSSTransition>
    </TransitionGroup>
  
  <Footer/>
  </Router>
  
  ,

  document.getElementById('root')
);


