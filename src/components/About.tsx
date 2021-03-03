import React, { FC } from 'react';
import '../css/About.css';

const About: FC = () => {
    return (
        <div className='container mt-5 About'>
            <h2 className='primary-color-text text-center text-decoration-underline'>About</h2>
            <div className='About-content px-5'>
                <p>
                    Second year student of the Software development and Network Engineering COOP
                    program at Sheridan College, with a high overall GPA.
                </p>
                <p className='m-0'>
                    Skilled in backend development with Python, Node.js, Java, C# and .NET.
                    Proficient in front development with HTML5, CSS3, JavaScript and React.js.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur atque
                    rerum earum similique, molestiae eligendi iure laborum cum minus suscipit
                    dolorem, excepturi libero quo eos hic quos. Suscipit, rem?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quo aut
                    facilis provident a unde earum ducimus dignissimos doloribus voluptate. Soluta
                    qui nobis earum. Saepe consequatur qui hic magnam tempora.
                </p>
            </div>
        </div>
    );
};

export default About;
