import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-blue-500 text-white shadow-md">
      <h1 className="text-xl font-bold">Multi-Theme App</h1>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className="text-black rounded px-2 py-1"
      >
        <option value="theme-1">Theme 1 - Minimalist</option>
        <option value="theme-2">Theme 2 - Dark Sidebar</option>
        <option value="theme-3">Theme 3 - Playful Cards</option>
      </select>
    </header>
  );
};

export default Header;