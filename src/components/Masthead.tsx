import React, { FC } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import '../css/Masthead.css';

const Masthead: FC = () => {
    return (
        <div className='Masthead container'>
            <div className='Masthead-content d-flex justify-content-center align-items-md-center align-items-sm-start flex-wrap'>
                <img
                    className='px-3'
                    src={`${process.env.PUBLIC_URL}/images/avataaars.svg`}
                    alt='Me'
                />
                <h1 className='Masthead-text'>
                    <p>
                        Hello{' '}
                        <span role='img' aria-label='wave-emoji'>
                            👋
                        </span>
                    </p>
                    <p>
                        I'm <span className='name'>Jacob Bruce</span>, a software engineering
                        student at <strong>Sheridan College</strong>
                    </p>
                </h1>
            </div>
            <div className='text-center lead Masthead-cth '>
                <p>
                    <span className='mx-3'>Want to work together?</span>
                    <Link to='contact' smooth={true} duration={200}>
                        <motion.button
                            className='Masthead-button'
                            animate={{ rotate: 0 }}
                            whileHover={{
                                rotate: [5, -5, 5, -5, 0],
                                transition: { duration: 0.5 },
                            }}
                        >
                            Yes!
                        </motion.button>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Masthead;
