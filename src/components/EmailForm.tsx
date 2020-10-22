import React, { ChangeEvent, FC, FormEvent } from 'react';
import './css/EmailForm.css';
import Loading from './Loader';

interface Props {
    emailData: {
        name: string;
        email: string;
        message: string;
    };
    loading: boolean;
    handleChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void;
    sendEmail(e: FormEvent<HTMLFormElement>): void;
    emailResponse: any;
}

const EmailForm: FC<Props> = ({ emailData, sendEmail, handleChange, loading, emailResponse }) => {
    return (
        <>
            <div>
                <h3 className='text-center'>Contact Form</h3>
            </div>

            {emailResponse.sent && (
                <div>
                    {emailResponse.error ? (
                        <p className='text-center m-4' style={{ color: 'red' }}>
                            There was an error sending your email, please try again or contact me
                            using the phone number or email address above
                        </p>
                    ) : (
                        <h4 className='text-center m-4'>Email Sent 🚀</h4>
                    )}
                </div>
            )}

            {loading ? (
                <Loading />
            ) : (
                <form className='EmailForm' onSubmit={sendEmail}>
                    <div className='form-group'>
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
                    <div className='form-group'>
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
                    <div className='form-group'>
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
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary email-button'>
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};

export default EmailForm;
