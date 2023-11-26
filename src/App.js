import './App.css'
import React, { useState } from 'react'

import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Resume from './components/Resume'
import Particle from './components/Particles'

import ScrollToTopOnRouteChange from './components/ScrollToTop'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [path, setPath] = useState("/")

    const changePath = () => {
        const path = window.location.pathname.split("/")
        const tempPath = path[path.length - 1]
        setPath(tempPath)
    }

    return (
        <div className="App">
            <Particle />
            <Router>
                <Header/>
                <ScrollToTopOnRouteChange />
                <Routes>
                    <Route exact path="/skills" element={<Skills changePath={changePath} />} />
                    <Route exact path="/works" element={<Works changePath={changePath} />} />
                    <Route exact path="/contact" element={<Contact changePath={changePath} />} />
                    <Route exact path="/resume" element={<Resume changePath={changePath} />} />
                    <Route path="/*" element={<About changePath={changePath} />} />
                </Routes>
                <Navbar path={path} />
                <Footer />
            </Router>
        </div>
    );
}

export default App;