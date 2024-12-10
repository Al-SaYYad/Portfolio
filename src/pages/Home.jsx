// This file has been downgraded from TypeScript to JavaScript

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFacebook, FaTelegramPlane, FaInstagram, FaLinkedin, FaTwitter, FaVideo, FaEdit, FaDesktop } from 'react-icons/fa';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: #ffffff;
  padding-top: 80px;
`;

const HeroSection = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 1;
  padding: 2rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 4px solid #ffffff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #d1d1d1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 4rem 2rem;
  background: rgba(255,255,255,0.05);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
  color: #ffffff;
`;

const ServiceDescription = styled.p`
  color: #d1d1d1;
`;

const CallToAction = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(0,0,0,0.5);
`;

const FloatingSocialBar = styled.div`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 10px;
  animation: slideIn 0.5s ease-in-out;

  @keyframes slideIn {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(-50%);
    }
  }
`;

const SocialIcon = styled.a`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  padding: 10px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Home = () => {
  const services = [
    {
      icon: <FaVideo />,
      title: 'Video Editing',
      description: 'Professional editing services that transform raw footage into compelling visual stories.'
    },
    {
      icon: <FaEdit />,
      title: 'Post-Production',
      description: 'Advanced color grading, sound design, and visual effects to elevate your content.'
    },
    {
      icon: <FaDesktop />,
      title: 'Motion Graphics',
      description: 'Creative motion graphics and animations to enhance your visual communication.'
    }
  ];

  return (
    <HomeContainer>
      <HeroSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroContent>
          <ProfileImageWrapper>
            <ProfileImage src="/admin.jpg" alt="Professional Headshot" />
          </ProfileImageWrapper>
          <Title>Welcome to My Portfolio</Title>
          <Subtitle>Showcasing my video editing and montage skills.</Subtitle>
          <motion.a 
            href="/contact" 
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </HeroContent>
      </HeroSection>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <CallToAction
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Title>Ready to Create Something Amazing?</Title>
        <Subtitle>
          Let's collaborate and bring your creative vision to life. 
          From corporate promos to artistic documentaries, I'm here to help.
        </Subtitle>
        <motion.a 
          href="/contact" 
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
      </CallToAction>

      <FloatingSocialBar>
        <SocialIcon href="https://www.facebook.com/profile.php?id=61553680762430&mibextid=JRoKGi" target="_blank"><FaFacebook /></SocialIcon>
        <SocialIcon href="https://t.me/Mohamed_Mesba7" target="_blank"><FaTelegramPlane /></SocialIcon>
        <SocialIcon href="https://x.com/Mohamed55427517?t=e8hgAY17m4rD2MrLy3oV5Q&s=09" target="_blank"><FaTwitter /></SocialIcon>
        <SocialIcon href="https://www.instagram.com/mohamedmesbah37?igsh=MW00MTJiYjl2OGx3dQ==" target="_blank"><FaInstagram /></SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/mohamed-ahmed-mesba773" target="_blank"><FaLinkedin /></SocialIcon>
      </FloatingSocialBar>
    </HomeContainer>
  );
};

export default Home;
