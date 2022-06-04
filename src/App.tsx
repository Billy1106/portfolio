import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Pages from './pages/Pages'

function App() {
    return (
      <div className="App">
      <Router>
        <Pages/>
        </Router>
       
      </div>
    )
}

export default App;