// This file has been downgraded from TypeScript to JavaScript

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaVideo, FaSearch, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const PortfolioContainer = styled.div`
  min-height: 100vh;
  background: var(--background-dark);
  padding: 80px 2rem 2rem;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
`;

const ProjectThumbnail = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }

  svg {
    color: white;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

const ProjectTitle = styled.h3`
  color: white;
  text-align: center;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: var(--background-dark);
  border-radius: 15px;
  max-width: 600px;
  width: 90%;
  padding: 2rem;
  position: relative;
  text-align: center;
`;

const ModalHeader = styled.h2`
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const ModalDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: center;
`;

const WatchButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gradient-primary);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const Portfolio = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'corporate',
      title: t('portfolio.corporateTitle'),
      description: t('portfolio.corporateDescription'),
      thumbnail: '/1.png',
      videoUrl: 'https://example.com/corporate-video.mp4'
    },
    {
      id: 'event',
      title: t('portfolio.eventTitle'),
      description: t('portfolio.eventDescription'),
      thumbnail: '/2.webp',
      videoUrl: 'https://example.com/event-highlights.mp4'
    },
    {
      id: 'product',
      title: t('portfolio.productTitle'),
      description: t('portfolio.productDescription'),
      thumbnail: '/3.webp',
      videoUrl: 'https://example.com/product-video.mp4'
    },
    {
      id: 'video-editor-cv',
      title: t('portfolio.videoEditorCVTitle'),
      description: t('portfolio.videoEditorCVDescription'),
      thumbnail: '/0-video-editor-cv___media_library_original_1600_900.jpg',
      videoUrl: '/gradient-blur-colorful-design-creative-portfolio-fashion-presentation-slideshow.mp4'
    },
    {
      id: 'video-editor-portfolio',
      title: t('portfolio.videoEditorPortfolioTitle'),
      description: t('portfolio.videoEditorPortfolioDescription'),
      thumbnail: '/0-video-editor-portfolio___media_library_original_1600_900.webp',
      videoUrl: '/tech-purple-training-and-development-business-portfolio-presentation-slideshow (1).mp4'
    },
    {
      id: '1',
      title: t('portfolio.corporateTitle'),
      description: t('portfolio.corporateDescription'),
      thumbnail: '/1.png',
      videoUrl: 'https://example.com/corporate-video.mp4'
    },
    {
      id: '2',
      title: t('portfolio.eventTitle'),
      description: t('portfolio.eventDescription'),
      thumbnail: '/2.webp',
      videoUrl: 'https://example.com/event-highlights.mp4'
    },

    {
      id: '5',
      title: t('portfolio.videoEditorPortfolioTitle'),
      description: t('portfolio.videoEditorPortfolioDescription'),
      thumbnail: '/0-video-editor-portfolio___media_library_original_1600_900.webp',
      videoUrl: '/tech-purple-training-and-development-business-portfolio-presentation-slideshow (1).mp4'
    },
    {
      id: '4',
      title: t('portfolio.videoEditorCVTitle'),
      description: t('portfolio.videoEditorCVDescription'),
      thumbnail: '/0-video-editor-cv___media_library_original_1600_900.jpg',
      videoUrl: '/gradient-blur-colorful-design-creative-portfolio-fashion-presentation-slideshow.mp4'
    },    {
      id: '3',
      title: t('portfolio.productTitle'),
      description: t('portfolio.productDescription'),
      thumbnail: '/3.webp',
      videoUrl: 'https://example.com/product-video.mp4'
    },
  ];

  const ProjectModal = () => {
    if (!selectedProject) return null;
    const project = projects.find(p => p.id === selectedProject);
    
    return (
      <ModalOverlay 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedProject(null)}
      >
        <ModalContent 
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <CloseButton onClick={() => setSelectedProject(null)}>
            <FaTimes />
          </CloseButton>
          <ModalHeader>{project?.title}</ModalHeader>
          <ModalImage src={project?.thumbnail} alt={project?.title} />
          <ModalDescription>{project?.description}</ModalDescription>
          <ModalActions>
            <WatchButton href={project?.videoUrl} target="_blank">
              <FaVideo /> {t('portfolio.viewProject')}
            </WatchButton>
          </ModalActions>
        </ModalContent>
      </ModalOverlay>
    );
  };

  return (
    <PortfolioContainer>
      <PageTitle>{t('Projects')}</PageTitle>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedProject(project.id)}
          >
            <ProjectThumbnail src={project.thumbnail} alt={project.title} />
            <ProjectOverlay>
              <FaSearch />
              <ProjectTitle>{project.title}</ProjectTitle>
            </ProjectOverlay>
          </ProjectCard>
        ))}
      </ProjectGrid>
      
      <AnimatePresence>
        {selectedProject && <ProjectModal />}
      </AnimatePresence>
    </PortfolioContainer>
  );
};

export default Portfolio;
