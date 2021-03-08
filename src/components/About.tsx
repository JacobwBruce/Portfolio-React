import React, { FC } from 'react';
import '../css/About.css';

const About: FC = () => {
    return (
        <div className='container my-5 About d-grid justify-content-center'>
            <h2 data-aos='fade-up' className='section-title'>
                About
            </h2>
            <div data-aos='fade-up' className='About-content'>
                <p>
                    I'm a third year student of the Software Development and Network Engineering
                    COOP program at Sheridan College, with a high overall GPA.
                </p>

                <p>
                    I recently worked as a <strong>Java Learning Assitant</strong> with Sheridan
                    College, where I got the oppurtunity to teach and aid students in their
                    programming course, predominately in <strong>Java</strong> and{' '}
                    <strong>Spring Boot</strong>. Through coaching and collaboration with students
                    and college faculty I supported the development of an improved online learning
                    experience.
                </p>

                <p>
                    I also enjoying breaking things in <strong>TypeScript, Java, Python,</strong>{' '}
                    and <strong>C#</strong>, and do most of my projects with <strong>React</strong>{' '}
                    and <strong>Node.js</strong> (including this one).
                </p>
            </div>
        </div>
    );
};

export default About;
