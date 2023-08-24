import React, { useState, createContext } from 'react';
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

export const ModeContext = createContext<ModeContextType | undefined>(undefined);

function App() {  
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
              colorScheme: colorScheme
            }}
          >
            <BrowserRouter>
              <NavBar />
              <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/about" element={<About />} />
              </Routes>
              <Footer />
              {/* <AppShell
                header={<NavBar />}
                footer={<Footer />}
                h="300px"
                style={{ height: '10px' }}
              >
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </AppShell> */}
            </BrowserRouter>
          </MantineProvider>
        </ColorSchemeProvider>
      </ModeContext.Provider>
    </>
  );
}

export default App;
