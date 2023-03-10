import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About'
import DatingApps from './components/DatingApps'
import MenTypes from './components/MenTypes'
import RedFlags from './components/RedFlags'
import Resources from './components/Resources'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Router >
        <Header />
                <Routes>
                    <Route path="/About" element={<About />} />
                    <Route path="/DatingApps" element={<DatingApps />} />
                    <Route path="/MenTypes" element={<MenTypes />} />
                    <Route path="/RedFlags" element={<RedFlags />} />
                    <Route path="/Resources" element={<Resources />} />
                </Routes>
            </Router>
    </div>
  );
}

export default App;
