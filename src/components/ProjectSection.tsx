import React, { FC } from 'react';
import Project from './Project';
import { projects } from '../data/projects.json';

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
                    {projects.map((project, index) => (
                        <Project
                            key={`project${index}`}
                            id={index.toString()}
                            name={project.name}
                            description={project.description}
                            url={project.url}
                            image={require(`../images/${project.image}`)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
