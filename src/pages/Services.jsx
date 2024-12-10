// This file has been downgraded from TypeScript to JavaScript

import React from 'react';
import styled from 'styled-components';
import { FaBriefcase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ServicesContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Services = () => {
  const { t } = useTranslation();
  return (
    <ServicesContainer>
      <h1>{t('services.title')}</h1>
      <ul>
        <li><FaBriefcase /> {t('services.service1')}</li>
        <li><FaBriefcase /> {t('services.service2')}</li>
        <li><FaBriefcase /> {t('services.service3')}</li>
      </ul>
    </ServicesContainer>
  );
};

export default Services;
