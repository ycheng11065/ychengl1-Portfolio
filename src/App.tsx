import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/mainPage';
import NavBar from './components/navBar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppShell, MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
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
          <AppShell header={<NavBar />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </AppShell>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
