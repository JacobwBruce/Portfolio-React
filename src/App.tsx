import React from 'react';
import './App.css';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Masthead from './components/Masthead';
import ProjectSection from './components/ProjectSection';

function App() {
    return (
        <div id='page-top'>
            <Header />
            <Masthead />
            <ProjectSection />
            <AboutSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;
