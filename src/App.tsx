import React, { useState, createContext, useRef } from 'react';
import './App.css';
import logo from './logo.svg';
import About from './components/About';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Model from './components/Model';
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
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: colorScheme,
            colors: {
              dark: [
                '#C1C2C5',
                '#A6A7AB',
                '#909296',
                '#5C5F66',
                '#373A40',
                '#2C2E33',
                '#25262B',
                '#000000',
              ],
            },
          }}
        >
          <BrowserRouter
          // basename="/ychengl1-Portfolio"
          >
            <NavBar />
            {/* <MainPage /> */}
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
