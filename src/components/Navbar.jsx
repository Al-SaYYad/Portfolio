// This file has been downgraded from TypeScript to JavaScript

import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(18, 18, 18, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  transition: color 0.3s ease;

  svg {
    margin-right: 0.5rem;
    color: var(--primary-color);
  }

  &:hover {
    color: var(--primary-color);
  }
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  margin-right: 1rem;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 5px;
  transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  svg {
    margin-right: 0.5rem;
  }

  &.active {
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    color: var(--text-primary);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &.active::after {
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: width 0.3s ease;
  }

  &:hover {
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    color: var(--text-primary);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 1rem;
`;

const LanguageDropdown = styled.select`
  background: var(--background-dark);
  color: var(--text-primary);
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: var(--primary-color);
    color: white;
  }

  &:focus {
    outline: none;
    border-color: var(--secondary-color);
  }
`;

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightTheme, setLightTheme] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      setLightTheme(true);
      document.body.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    setLightTheme((prev) => {
      const newTheme = !prev;
      document.body.classList.toggle('light-theme', newTheme);
      localStorage.setItem('theme', newTheme ? 'light' : 'dark');
      document.documentElement.setAttribute('data-theme', newTheme ? 'light' : 'dark');
      return newTheme;
    });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">
          <LogoImage src="/public/Logo.png" alt="Logo" />
        </Logo>
        <NavLinks>
          <StyledNavLink to="/">{t('navbar.home')}</StyledNavLink>
          <StyledNavLink to="/portfolio">{t('navbar.portfolio')}</StyledNavLink>
          <StyledNavLink to="/contact">{t('navbar.contact')}</StyledNavLink>
          <StyledNavLink to="/showreel">{t('navbar.showreel')}</StyledNavLink>
        </NavLinks>
        <LanguageDropdown onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </LanguageDropdown>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
