import React, { FC } from 'react';
import avatar from '../images/avataaars.svg';
import './css/Masthead.css';

const Masthead: FC = () => {
    return (
        <div className='Masthead container'>
            <div className='Masthead-content d-flex justify-content-center align-items-md-center align-items-sm-start flex-wrap'>
                <img className='px-3' src={avatar} alt='Me' />
                <h1 className='Masthead-text'>
                    <p>
                        Hello{' '}
                        <span role='img' aria-label='wave-emoji'>
                            👋
                        </span>
                    </p>
                    <p>
                        I'm <span className='name'>Jacob Bruce</span>, a software engineering
                        student at Sheridan College
                    </p>
                </h1>
            </div>
            <div className='text-center lead Masthead-cth '>
                <p>
                    Want to work together? <button className='Masthead-button'>Yes!</button>
                </p>
            </div>
        </div>
    );
};

export default Masthead;
