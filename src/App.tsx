import React, { useState } from 'react';
import About from './components/About';
import Masthead from './components/Masthead';
import './css/App.css';
import { WiDaySunny, WiMoonWaningCrescent3 } from 'react-icons/wi';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
    if (JSON.parse(window.localStorage.getItem('theme')!) === 'dark') {
        window.localStorage.removeItem('theme');
    }

    let defaultTheme = false;
    if (window.localStorage.getItem('theme') !== null) {
        defaultTheme = JSON.parse(window.localStorage.getItem('theme')!);
    }
    const [isDarkTheme, setDarkTheme] = useState(defaultTheme);

    const changeTheme = () => {
        setDarkTheme(!isDarkTheme);
        window.localStorage.setItem('theme', JSON.stringify(!isDarkTheme));
    };

    return (
        <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <Masthead />
            <About />
            <Projects />
            <Contact />
            <Footer />

            <div className='fixed-top'>
                {!isDarkTheme ? (
                    <WiDaySunny
                        size={50}
                        className='m-3'
                        style={{ cursor: 'pointer' }}
                        onClick={changeTheme}
                    />
                ) : (
                    <WiMoonWaningCrescent3
                        size={50}
                        className='m-3'
                        style={{ cursor: 'pointer' }}
                        onClick={changeTheme}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
