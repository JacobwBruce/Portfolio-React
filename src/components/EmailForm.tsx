import axios from 'axios';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Loader from './Loader';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import { motion } from 'framer-motion';
import '../css/EmailForm.css';

const EmailForm: FC = () => {
    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEmailData({
            ...emailData,
            [name]: value,
        });
    };

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post(
                'https://nodejs-emailing-bot.herokuapp.com/sendPortfolioEmail',
                emailData
            );
            setEmailData({
                name: '',
                email: '',
                message: '',
            });
            ToastsStore.success('Email Sent! 🚀', 5000);
        } catch (err) {
            ToastsStore.error('There was an error sending your email', 8000);
        }
        setLoading(false);
    };

    return (
        <div className='EmailForm'>
            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_RIGHT} />

            {loading ? (
                <Loader />
            ) : (
                <form className='EmailForm' onSubmit={sendEmail}>
                    <div className='mb-3'>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Name'
                            required
                            value={emailData.name}
                            onChange={handleChange}
                            name='name'
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            className='form-control'
                            type='email'
                            placeholder='Email'
                            required
                            value={emailData.email}
                            onChange={handleChange}
                            name='email'
                        />
                    </div>
                    <div className='mb-3'>
                        <textarea
                            placeholder='Message'
                            className='form-control'
                            id='message-TextArea'
                            cols={30}
                            rows={10}
                            value={emailData.message}
                            onChange={handleChange}
                            name='message'
                        ></textarea>
                    </div>
                    <div className='mb-3'>
                        <motion.button
                            animate={{ rotate: 0 }}
                            whileHover={{
                                rotate: [5, -5, 5, -5, 0],
                                transition: { duration: 0.5 },
                            }}
                            type='submit'
                            className='btn btn-primary email-button'
                        >
                            Submit
                        </motion.button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default EmailForm;
