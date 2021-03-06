import React, { FC } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaHackerrank } from 'react-icons/fa';
import '../css/Footer.css';

const Footer: FC = () => {
    return (
        <>
            <footer className='footer text-center'>
                <div className='container'>
                    <div className='row px-5'>
                        <div className='col-lg-6 mb-5 mb-lg-0'>
                            <h4 className='mb-4'>LOCATION</h4>
                            <p className='pre-wrap lead mb-0'>Toronto and surrounding area</p>
                        </div>
                        <div className='col-lg-6 mb-5 mb-lg-0'>
                            <h4 className='mb-4'>AROUND THE WEB</h4>
                            <a
                                className='social-media-link mx-1'
                                href='https://github.com/JacobwBruce'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <AiFillGithub size={45} />
                            </a>
                            <a
                                className='social-media-link mx-1'
                                href='https://www.hackerrank.com/jacobwbruce'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FaHackerrank size={45} />
                            </a>
                            <a
                                className='social-media-link mx-1'
                                href='https://www.linkedin.com/in/jacob-bruce'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <AiFillLinkedin size={45} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <section className='copyright py-4 text-center'>
                <div className='container'>
                    <small className='pre-wrap'>Copyright © jacobbruce.ca 2021</small>
                </div>
            </section>
        </>
    );
};

export default Footer;
