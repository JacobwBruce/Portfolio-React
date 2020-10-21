import React, { FC } from 'react';

const Footer: FC = () => {
    return (
        <>
            <footer className='footer text-center'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 mb-5 mb-lg-0'>
                            <h4 className='mb-4'>LOCATION</h4>
                            <p className='pre-wrap lead mb-0'>Toronto and surrounding area</p>
                        </div>
                        <div className='col-lg-6 mb-5 mb-lg-0'>
                            <h4 className='mb-4'>AROUND THE WEB</h4>
                            <a
                                className='btn btn-outline-light btn-social mx-1'
                                href='https://github.com/JacobwBruce'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <i className='fab fa-github'></i>
                            </a>
                            <a
                                className='btn btn-outline-light btn-social mx-1'
                                href='https://www.hackerrank.com/jacobwbruce'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <i className='fab fa-hackerrank'></i>
                            </a>
                            <a
                                className='btn btn-outline-light btn-social mx-1'
                                href='https://www.linkedin.com/in/jacob-bruce'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <i className='fab fa-linkedin'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <section className='copyright py-4 text-center text-white'>
                <div className='container'>
                    <small className='pre-wrap'>Copyright © jacobbruce.ca 2020</small>
                </div>
            </section>
        </>
    );
};

export default Footer;
