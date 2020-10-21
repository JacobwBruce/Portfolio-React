import React, { FC } from 'react';
import './css/Project.css';

interface Props {
    id: string;
    name: string;
    image: string;
    url: string;
    description: string;
}

const Project: FC<Props> = ({ id, name, image, url, description }) => {
    return (
        <>
            <div className='col-md-6 col-lg-4 mb-5'>
                <div
                    className='portfolio-item mx-auto'
                    data-toggle='modal'
                    data-target={`#portfolioModal${id}`}
                >
                    <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                        <div className='portfolio-item-caption-content text-center text-white'>
                            <i className='fas fa-plus fa-3x'></i>
                        </div>
                    </div>
                    <img className='img-fluid' src={image} alt={name} />
                </div>
            </div>

            <div
                className='portfolio-modal modal fade'
                id={`portfolioModal${id}`}
                // tabindex="-1"
                role='dialog'
                aria-labelledby={`#portfolioModal${id}Label`}
                aria-hidden='true'
            >
                <div className='modal-dialog modal-xl' role='document'>
                    <div className='modal-content'>
                        <button
                            className='close'
                            type='button'
                            data-dismiss='modal'
                            aria-label='Close'
                        >
                            <span aria-hidden='true'>
                                <i className='fas fa-times'></i>
                            </span>
                        </button>
                        <div className='modal-body text-center'>
                            <div className='container'>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-8'>
                                        <h2 className='portfolio-modal-title text-secondary mb-0'>
                                            {name}
                                        </h2>
                                        <div className='divider-custom'>
                                            <div className='divider-custom-line'></div>
                                            <div className='divider-custom-icon'>
                                                <i className='fas fa-star'></i>
                                            </div>
                                            <div className='divider-custom-line'></div>
                                        </div>
                                        <img
                                            className='img-fluid rounded mb-5'
                                            src={image}
                                            alt='Controller'
                                        />
                                        <p className='mb-5'>{description}</p>
                                        <button className='btn btn-primary project-btn'>
                                            <a
                                                className='project-link'
                                                href={url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                Visit Project
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
