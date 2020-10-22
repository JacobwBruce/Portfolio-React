import React, { ChangeEvent, FormEvent, useState } from 'react';
import './css/App.css';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Masthead from './components/Masthead';
import ProjectSection from './components/ProjectSection';
import './css/TemplateStyles.css';
import './css/body.css';
import './css/heading.css';
import EmailForm from './components/EmailForm';

function App() {
    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEmailData({
            ...emailData,
            [name]: value,
        });
    };

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(emailData);
        return '';
    };

    return (
        <div id='page-top'>
            <Header />
            <Masthead />
            <ProjectSection />
            <AboutSection />
            <ContactSection />
            <EmailForm emailData={emailData} handleChange={handleChange} sendEmail={sendEmail} />
            <Footer />
        </div>
    );
}

export default App;
