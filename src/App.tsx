import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {
  AppShell,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: colorScheme }}
      >
        <BrowserRouter>
          <AppShell 
            header={<NavBar />}
            footer={<Footer />}
            h="300px"
            style={{ height: '10px' }}
          >
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </AppShell>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
