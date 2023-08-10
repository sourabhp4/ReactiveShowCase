import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Resume from './components/Resume'

import ScrollToTopOnRouteChange from './components/ScrollToTop'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
  } from 'react-router-dom'

function App() {
    
    return (
        <div className="App">
            <Router>
                <Header />
                <ScrollToTopOnRouteChange />
                <Routes>
                    <Route exact path="/skills" element={<Skills />} />
                    <Route exact path="/works" element={<Works />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/resume" element={<Resume />} />
                    <Route path="/*" element={<About />} />
                </Routes>
                <NavbarWrapper />
            </Router>
            <Footer />
        </div>
    )
}

function NavbarWrapper() {
    const location = useLocation()
    let activeState
  
    if (location.pathname === '/skills') {
      activeState = 'skills'
    } else if (location.pathname === '/works') {
      activeState = 'works'
    } else if (location.pathname === '/contact') {
      activeState = 'contact'
    } else if (location.pathname === '/resume') {
      activeState = 'resume'
    } else {
      activeState = 'about'
    }
  
    return <Navbar state={activeState} />
  }

export default App
