import React, { FC } from 'react';

const AboutSection: FC = () => {
    return (
        <section className='page-section bg-primary text-white mb-0' id='about'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='page-section-heading d-inline-block text-white'>ABOUT</h2>
                </div>
                <div className='divider-custom divider-light'>
                    <div className='divider-custom-line'></div>
                    <div className='divider-custom-icon'>
                        <i className='fas fa-star'></i>
                    </div>
                    <div className='divider-custom-line'></div>
                </div>
                <div className='row'>
                    <div className='col-lg-4 ml-auto'>
                        <p className='text-center lead'>
                            Second year student of the Software development and Network Engineering
                            COOP program at Sheridan College, with a high overall GPA.
                        </p>
                    </div>
                    <div className='col-lg-4 mr-auto'>
                        <p className='text-center lead'>
                            Skilled in backend development with Python, Node.js, Java, C# and .NET.
                            Proficient in front development with HTML5, CSS3, JavaScript and
                            React.js.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
