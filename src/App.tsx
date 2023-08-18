import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/mainPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
