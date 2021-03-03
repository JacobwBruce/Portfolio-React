import React from 'react';
import About from './components/About';
import Masthead from './components/Masthead';
import './css/App.css';

function App() {
    return (
        <div className='App light-theme'>
            <Masthead />
            <About />
        </div>
    );
}

export default App;
