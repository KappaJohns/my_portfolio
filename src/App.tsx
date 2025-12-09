import { useState } from 'react';

import { MantineProvider, createTheme } from '@mantine/core';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import './App.css';

const theme = createTheme({
  /** Your theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Navigation />
      <Hero />
    </MantineProvider>
  );
}

export default App;
