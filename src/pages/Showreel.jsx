// This file has been downgraded from TypeScript to JavaScript

import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaPlay, FaPause } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const VideoSection = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 40px auto;
  text-align: center;
`;

const VideoPlayer = styled.video`
  width: 800px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  object-fit: cover;
`;

const PlayButton = styled.button`
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 15px;
  font-size: 2rem;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-2px);
  }
`;

const Showreel = () => {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <Container>
      <Header>
        <Title>{t('showreel.title')}</Title>
        <Subtitle>{t('showreel.subtitle')}</Subtitle>
      </Header>
      <VideoSection>
        <VideoPlayer ref={videoRef} controls poster='/public/1.png'>
          <source src="/tech-purple-training-and-development-business-portfolio-presentation-slideshow (1).mp4" type="video/mp4" />
          {t('showreel.videoNotSupported')}
        </VideoPlayer>
        <PlayButton onClick={handlePlayButtonClick}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </PlayButton>
      </VideoSection>
    </Container>
  );
};

export default Showreel;
