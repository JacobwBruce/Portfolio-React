import React, { useEffect, useState } from 'react';
import About from './components/About';
import Masthead from './components/Masthead';
import './css/App.css';
import { WiDaySunny, WiMoonWaningCrescent3 } from 'react-icons/wi';

function App() {
    const [isDarkTheme, setDarkTheme] = useState(
        JSON.parse(window.localStorage.getItem('theme')!) || false
    );

    const changeTheme = () => {
        setDarkTheme(!isDarkTheme);
        window.localStorage.setItem('theme', JSON.stringify(!isDarkTheme));
    };

    useEffect(() => {
        if (
            !JSON.parse(window.localStorage.getItem('theme')!) &&
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            changeTheme();
        }
    }, []);

    return (
        <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <Masthead />
            <About />

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
