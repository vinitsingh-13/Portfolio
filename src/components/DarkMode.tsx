// src/components/DarkModeToggle.js
import { useState, useEffect } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded text-purple-800 dark:text-gray-200"
    >
      {darkMode ?  <MdOutlineLightMode size={30} color="blueviolet" /> : <LuMoonStar size={30} color="purple" />}
    </button>
  );
};

export default DarkModeToggle;
