// This file has been downgraded from TypeScript to JavaScript

import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTelegramPlane, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>&copy; {new Date().getFullYear()} Al-Sayyad. All rights reserved.</FooterText>
        <SocialLinks>
        <SocialLink href="https://www.facebook.com/profile.php?id=61553680762430&mibextid=JRoKGi" target="_blank"><FaFacebook /></SocialLink>
        <SocialLink href="https://t.me/Mohamed_Mesba7" target="_blank"><FaTelegramPlane /></SocialLink>
        <SocialLink href="https://x.com/Mohamed55427517?t=e8hgAY17m4rD2MrLy3oV5Q&s=09" target="_blank"><FaTwitter /></SocialLink>
        <SocialLink href="https://www.instagram.com/mohamedmesbah37?igsh=MW00MTJiYjl2OGx3dQ==" target="_blank"><FaInstagram /></SocialLink>
        <SocialLink href="https://www.linkedin.com/in/mohamed-ahmed-mesba773" target="_blank"><FaLinkedin /></SocialLink>
      </SocialLinks>
        <AdditionalLinks>
          <a href="/resume" target="_blank">Resume</a>
          <a href="/portfolio" target="_blank">Portfolio</a>
        </AdditionalLinks>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: var(--background-dark);
  color: var(--text-light);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 2px solid var(--primary-color);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: var(--primary-color);
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: var(--secondary-color);
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: var(--primary-color);
`;

const AdditionalLinks = styled.div`
  margin-top: 10px;
  a {
    color: var(--text-light);
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

export default Footer;
