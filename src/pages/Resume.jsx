// This file has been downgraded from TypeScript to JavaScript

import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaBriefcase, FaGraduationCap, FaClipboardList } from 'react-icons/fa';

const ResumeContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin:0 auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: var(--primary-color);
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 10px;
`;

const EducationItem = styled.div`
  margin-bottom: 10px;
`;

const Resume = () => {
  const { t } = useTranslation();
  return (
    <ResumeContainer>
      <Header>
        <h1>{t('resume.title')}</h1>
        <h2>{t('resume.jobTitle')}</h2>
        <DownloadButton href="/path/to/your/resume.pdf" download>{t('resume.download')}</DownloadButton>
      </Header>
      <Section>
        <SectionTitle><FaClipboardList /> {t('resume.summary')}</SectionTitle>
        <p>{t('resume.summaryDescription')}</p>
      </Section>
      <Section>
        <SectionTitle><FaBriefcase /> {t('resume.experience')}</SectionTitle>
        <ExperienceItem>
          <h3>Job Title - Company Name</h3>
          <p>Dates of Employment</p>
          <p>{t('resume.experienceDescription')}</p>
        </ExperienceItem>
        <ExperienceItem>
          <h3>Job Title - Company Name</h3>
          <p>Dates of Employment</p>
          <p>{t('resume.experienceDescription')}</p>
        </ExperienceItem>
      </Section>
      <Section>
        <SectionTitle><FaGraduationCap /> {t('resume.education')}</SectionTitle>
        <EducationItem>
          <h3>Degree - Institution Name</h3>
          <p>{t('resume.graduationYear')}</p>
        </EducationItem>
      </Section>
      <Section>
        <SectionTitle><FaClipboardList /> {t('resume.skills')}</SectionTitle>
        <ul>
          <li>{t('resume.skill1')}</li>
          <li>{t('resume.skill2')}</li>
          <li>{t('resume.skill3')}</li>
        </ul>
      </Section>
    </ResumeContainer>
  );
};

export default Resume;
