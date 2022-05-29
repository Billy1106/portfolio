import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import History from './pages/History';

import ErrorPage from './pages/ErrorPage';
import { BrowserRouter as Router, Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from './components/Header';
import Footer from './components/Footer';
import App from './App';
import Contact from './pages/Contact';
ReactDOM.render(
  <App />
  ,
  document.getElementById('root')
);


