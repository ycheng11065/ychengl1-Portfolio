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

type ModeContextType = {
  changed: boolean;
  setChanged: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModeContext = createContext<ModeContextType | undefined>(
  undefined
);

function App() {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const [changed, setChanged] = useState(false);
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <ModeContext.Provider value={{ changed, setChanged }}>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme: colorScheme,
            }}
          >
            <BrowserRouter>
              <NavBar />
              {/* <MainPage /> */}
              <Routes>
                <Route path="/" element={<MainPage />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </MantineProvider>
        </ColorSchemeProvider>
      </ModeContext.Provider>
    </>
  );
}

export default App;
