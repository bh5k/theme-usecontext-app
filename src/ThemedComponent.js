// ThemedComponent.js
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedComponent = () => {
  const { theme } = useTheme();

  return <div style={{ background: theme === 'light' ? '#eee' : '#333', color: theme === 'light' ? '#333' : '#eee', padding: '20px' }}>Themed Content</div>;
};

export default ThemedComponent;
