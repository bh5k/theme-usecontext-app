// App.js
import React from 'react';
import ThemeButton from './ThemeButton';
import ThemedComponent from './ThemedComponent';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme App</h1>
        <ThemeButton />
        <ThemedComponent />
        <ThemedComponent />
        <ThemedComponent />
        <ThemedComponent />
        <ThemedComponent />

      </div>
    </ThemeProvider>
  );
};

export default App;
