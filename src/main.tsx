import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Your theme override here */
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Navigation />
      <Hero />
      {/* <App /> */}
    </MantineProvider>
  </StrictMode>
);
