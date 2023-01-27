import React from 'react'
import About from './About'
import DatingApps from './DatingApps'
import MenTypes from './MenTypes'
import RedFlags from './RedFlags'
import Resources from './Resources'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function ContainerPage() {

    return (
        <div className='ContainerPage'>
            <Router >
                <Routes>
                    <Route path="/About" element={<About />} />
                    <Route path="/DatingApps" element={<DatingApps />} />
                    <Route path="/MenTypes" element={<MenTypes />} />
                    <Route path="/RedFlags" element={<RedFlags />} />
                    <Route path="/Resources" element={<Resources />} />
                </Routes>
            </Router>
        </div>
    )
}

export default ContainerPage