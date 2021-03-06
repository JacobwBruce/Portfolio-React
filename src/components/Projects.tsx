import React, { FC } from 'react';
import { projects } from '../data/projects.json';
import { features } from '../data/features.json';
import { FiExternalLink } from 'react-icons/fi';
import '../css/Projects.css';

const Projects: FC = () => {
    return (
        <div className='container my-5 About d-grid justify-content-center'>
            <h2 data-aos='fade-up' className='section-title'>
                Projects
            </h2>

            <div className='Featured'>
                <div className='row justify-content-center'>
                    <h4 data-aos='fade-right' className='primary-color-text col-12 col-md-3 mb-4'>
                        Featured Projects
                    </h4>
                    <div className='col-12 col-md-6'></div>
                </div>

                {features.map((feature, index) => (
                    <div
                        className='row justify-content-center align-items-center mb-5'
                        key={`feature-${index}`}
                    >
                        <div className='col-12 col-md-5'>
                            <img
                                data-aos='fade-right'
                                className='img-fluid'
                                src={`${process.env.PUBLIC_URL}/images/${feature.image}`}
                                alt={feature.name}
                            />
                        </div>
                        <div data-aos='fade-left' className='col-12 col-md-4'>
                            <h4 className='Project-title my-3'>{feature.name}</h4>
                            <p className='Project-desc mb-2'>{feature.description}</p>
                            <a
                                className='Project-link primary-color-text'
                                href={feature.url}
                                target='__blank'
                            >
                                <FiExternalLink size={30} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <div className='row justify-content-center'>
                    <h4 data-aos='fade-right' className='primary-color-text col-12 col-md-2 mb-4'>
                        Other Projects
                    </h4>
                    <div className='col-12 col-md-6'></div>
                </div>
                {projects.map((project, index) => (
                    <div
                        className='row Project justify-content-center mb-4'
                        key={`project-${index}`}
                    >
                        <h5 data-aos='fade-right' className='Project-title col-12 col-md-2'>
                            {project.name}
                        </h5>
                        <div data-aos='fade-left' className='col-12 col-md-6'>
                            <p className='Project-desc mb-1'>{project.description}</p>
                            <a
                                className='Project-link primary-color-text'
                                href={project.url}
                                target='__blank'
                            >
                                <FiExternalLink size={20} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
