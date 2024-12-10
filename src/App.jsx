// This file has been downgraded from TypeScript to JavaScript

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'; 
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Showreel from './pages/Showreel';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <AppContainer>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/showreel' element={<Showreel />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
