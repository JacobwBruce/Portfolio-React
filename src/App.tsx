import React, { useState } from 'react';
import About from './components/About';
import Masthead from './components/Masthead';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';
import { WiDaySunny, WiMoonWaningCrescent3 } from 'react-icons/wi';
import './css/App.css';

function App() {
    let defaultTheme = false;
    if (window.localStorage.getItem('isDarkTheme') !== null) {
        defaultTheme = JSON.parse(window.localStorage.getItem('isDarkTheme')!);
    }
    const [isDarkTheme, setDarkTheme] = useState(defaultTheme);

    const changeTheme = () => {
        setDarkTheme(!isDarkTheme);
        window.localStorage.setItem('isDarkTheme', JSON.stringify(!isDarkTheme));
    };

    const themeVariants = {
        initial: {
            x: '-100vw',
        },
        animate: {
            x: 0,
        },
        exit: {
            x: '100vw',
        },
    };

    return (
        <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <Masthead />
            <About />
            <Projects />
            <Contact />
            <Footer />|
            <div className='fixed-top'>
                <AnimatePresence exitBeforeEnter>
                    {!isDarkTheme ? (
                        <motion.div
                            key='sun'
                            variants={themeVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                        >
                            <WiDaySunny
                                size={50}
                                className='m-3'
                                style={{ cursor: 'pointer' }}
                                onClick={changeTheme}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key='moon'
                            variants={themeVariants}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                        >
                            <WiMoonWaningCrescent3
                                size={50}
                                className='m-3'
                                style={{ cursor: 'pointer' }}
                                onClick={changeTheme}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default App;
