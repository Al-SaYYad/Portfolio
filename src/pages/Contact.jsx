// This file has been downgraded from TypeScript to JavaScript

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFacebook, FaTelegramPlane, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--background-dark);
  color: var(--text-primary);
  padding: 40px;
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: var(--primary-color);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  box-sizing: border-box;
`;

const SubmitButton = styled(motion.button)`
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 12px 40px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
    transform: scale(1.05);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  margin: 0 10px;
  color: var(--text-primary);
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: var(--primary-color);
  }
`;

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <ContactContainer>
      <h1>{t('contact.title')}</h1>
      <p>{t('contact.description')}</p>
      <ContactForm
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
      >
        <FormTitle>{t('contact.title')}</FormTitle>
        <FormGroup>
          <FormLabel>{t('contact.formLabels.name')}</FormLabel>
          <FormInput type="text" name="name" placeholder={t('contact.formLabels.name')} value={formData.name} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <FormLabel>{t('contact.formLabels.email')}</FormLabel>
          <FormInput type="email" name="email" placeholder={t('contact.formLabels.email')} value={formData.email} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <FormLabel>{t('contact.formLabels.message')}</FormLabel>
          <FormTextarea name="message" placeholder={t('contact.formLabels.message')} value={formData.message} onChange={handleChange} required rows="5"></FormTextarea>
        </FormGroup>
        <SubmitButton type="submit">{t('contact.formLabels.send')}</SubmitButton>
      </ContactForm>
      <SocialLinks>
        <SocialLink href="https://www.facebook.com/profile.php?id=61553680762430&mibextid=JRoKGi" target="_blank"><FaFacebook /></SocialLink>
        <SocialLink href="https://t.me/Mohamed_Mesba7" target="_blank"><FaTelegramPlane /></SocialLink>
        <SocialLink href="https://x.com/Mohamed55427517?t=e8hgAY17m4rD2MrLy3oV5Q&s=09" target="_blank"><FaTwitter /></SocialLink>
        <SocialLink href="https://www.instagram.com/mohamedmesbah37?igsh=MW00MTJiYjl2OGx3dQ==" target="_blank"><FaInstagram /></SocialLink>
        <SocialLink href="https://www.linkedin.com/in/mohamed-ahmed-mesba773" target="_blank"><FaLinkedin /></SocialLink>
      </SocialLinks>
    </ContactContainer>
  );
};

export default Contact;
