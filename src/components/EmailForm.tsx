import axios from 'axios';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import '../css/EmailForm.css';

const EmailForm: FC = () => {
    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [emailResponse, setEmailResponse] = useState<any>({});

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
            const { data } = await axios.post(
                'https://nodejs-emailing-bot.herokuapp.com/sendPortfolioEmail',
                emailData
            );
            setEmailResponse({ ...data, sent: true });
            setEmailData({
                name: '',
                email: '',
                message: '',
            });
        } catch (err) {
            setEmailResponse({ sent: true, error: true });
        }
        setLoading(false);
    };

    return (
        <div className='EmailForm'>
            {emailResponse.sent && (
                <div>
                    {emailResponse.error ? (
                        <p className='text-center m-4' style={{ color: 'red' }}>
                            There was an error sending your email, please try again or contact me
                            using the phone number or email address above
                        </p>
                    ) : (
                        <h4 className='text-center m-4'>
                            Email Sent{' '}
                            <span role='img' aria-label='rocket'>
                                🚀
                            </span>
                        </h4>
                    )}
                </div>
            )}

            {loading ? (
                <div className='spinner-border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
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
                        <button type='submit' className='btn btn-primary email-button'>
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default EmailForm;
