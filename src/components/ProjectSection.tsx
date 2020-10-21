import React, { FC } from 'react';
import image from '../images/array-project.png';
import Project from './Project';

const ProjectSection: FC = () => {
    return (
        <section className='page-section portfolio' id='portfolio'>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='page-section-heading text-secondary mb-0 d-inline-block'>
                        PORTFOLIO
                    </h2>
                </div>
                <div className='divider-custom'>
                    <div className='divider-custom-line'></div>
                    <div className='divider-custom-icon'>
                        <i className='fas fa-star'></i>
                    </div>
                    <div className='divider-custom-line'></div>
                </div>
                <div className='row justify-content-center'>
                    <Project
                        id='0'
                        name='Array Sorting Visualizer'
                        description='Testing'
                        url='https://google.com'
                        image={image}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
