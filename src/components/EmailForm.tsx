import React, { ChangeEvent, FC, FormEvent } from 'react';
import './css/EmailForm.css';

interface Props {
    emailData: {
        name: string;
        email: string;
        message: string;
    };
    handleChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void;
    sendEmail(e: FormEvent<HTMLFormElement>): string;
}

const EmailForm: FC<Props> = ({ emailData, sendEmail, handleChange }) => {
    return (
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
    );
};

export default EmailForm;
