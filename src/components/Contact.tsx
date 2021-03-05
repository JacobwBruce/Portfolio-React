import React, { FC } from 'react';
import EmailForm from './EmailForm';

const Contact: FC = () => {
    return (
        <div className='container text-center mb-5' id='contact'>
            <h2 className='section-title'>Contact</h2>

            <div className='mb-5'>
                <h4>
                    Phone: <span className='primary-color-text'>289-839-2377</span>
                </h4>
                <h4>
                    Email: <span className='primary-color-text'>jacobwbruce@hotmail.com</span>
                </h4>
            </div>

            <div className='mt-5 d-flex justify-content-center'>
                <EmailForm />
            </div>
        </div>
    );
};

export default Contact;
