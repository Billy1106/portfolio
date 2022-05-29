import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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