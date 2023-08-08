import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<About />} />
                <Route exact path="/skills" element={<Skills />} />
                <Route exact path="/works" element={<Works />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Navbar />
        </Router>
    </div>
  )
}

export default App
