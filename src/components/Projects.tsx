import React, { FC } from 'react';
import { projects } from '../data/projects.json';
import { features } from '../data/features.json';
import '../css/Projects.css';
import { FiExternalLink } from 'react-icons/fi';
import ArrayPhoto from '../images/Array.png';
import WeatherPhoto from '../images/Weather.png';
import ImageifyPhoto from '../images/Imageify.png';

const Projects: FC = () => {
    features[0].image = ImageifyPhoto;
    features[1].image = ArrayPhoto;
    features[2].image = WeatherPhoto;

    return (
        <div className='container my-5 About d-grid justify-content-center'>
            <h2 className='section-title'>Projects</h2>

            <div className='Featured'>
                <div className='row justify-content-center'>
                    <h4 className='primary-color-text col-12 col-md-3 mb-4'>Featured Projects</h4>
                    <div className='col-12 col-md-6'></div>
                </div>

                {features.map((feature, index) => (
                    <div
                        className='row justify-content-center align-items-center mb-5'
                        key={`feature-${index}`}
                    >
                        <div className='col-12 col-md-5'>
                            <img className='img-fluid' src={feature.image} alt={feature.name} />
                        </div>
                        <div className='col-12 col-md-4'>
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
                    <h4 className='primary-color-text col-12 col-md-2 mb-4'>Other Projects</h4>
                    <div className='col-12 col-md-6'></div>
                </div>
                {projects.map((project, index) => (
                    <div
                        className='row Project justify-content-center mb-4'
                        key={`project-${index}`}
                    >
                        <h5 className='Project-title col-12 col-md-2'>{project.name}</h5>
                        <div className='col-12 col-md-6'>
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
