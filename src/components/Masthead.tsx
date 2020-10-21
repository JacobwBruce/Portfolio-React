import React, { FC } from 'react';
import avatar from '../images/avataaars.svg';

const Masthead: FC = () => {
    return (
        <header className='masthead bg-primary text-white text-center'>
            <div className='container d-flex align-items-center flex-column'>
                <img className='masthead-avatar mb-5' src={avatar} alt='' />
                <h1 className='masthead-heading mb-0'>JACOB BRUCE</h1>
                <div className='divider-custom divider-light'>
                    <div className='divider-custom-line'></div>
                    <div className='divider-custom-icon'>
                        <i className='fas fa-star'></i>
                    </div>
                    <div className='divider-custom-line'></div>
                </div>
                <p className='text-center masthead-subheading font-weight-light mb-0'>
                    Full Stack Software Engineer
                </p>
            </div>
        </header>
    );
};

export default Masthead;
