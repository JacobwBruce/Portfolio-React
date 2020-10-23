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
import axios from 'axios';

function App() {
    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [emailResponse, setEmailResponse] = useState({});

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
            const { data } = await axios.post('/sendEmail', emailData);
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
        <div id='page-top'>
            <Header />
            <Masthead />
            <ProjectSection />
            <AboutSection />
            <ContactSection />
            <EmailForm
                emailData={emailData}
                handleChange={handleChange}
                sendEmail={sendEmail}
                loading={loading}
                emailResponse={emailResponse}
            />
            <Footer />
        </div>
    );
}

export default App;
