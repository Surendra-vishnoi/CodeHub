// src/components/NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const apiItems = [
    { name: 'Books API', path: '/books' },
    { name: 'Codeforces API', path: '/codeforces' },
    { name: 'Daily Question API', path: '/dailyquestion' },
    { name: 'Github API', path: '/github' },
    { name: 'Memes API', path: '/memes' },
    { name: 'Random JSON', path: '/randomdata' },
  ];

  return (
    <nav className={`text-white p-6 flex justify-between items-center h-20 shadow-lg animate-gradient-shift ${darkMode ? 'dark' : ''}`}>
      <div className="flex items-center">
        <h1 className="text-3xl font-bold tracking-wider">CodeHub</h1>
      </div>

      <ul className="flex gap-6 items-center text-lg">
        <li>
          <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-400 transition-colors duration-300">
            About
          </Link>
        </li>
        <li className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center hover:text-yellow-400 transition-colors duration-300"
          >
            APIs <span className="ml-2">{isDropdownOpen ? '↑' : '↓'}</span>
          </button>
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-64 bg-gray-900 rounded-md shadow-lg py-2 z-10">
              {apiItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block px-4 py-3 text-lg hover:bg-magenta-600 hover:text-white transition-colors duration-300"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link to="/login" className="hover:text-yellow-400 transition-colors duration-300">
            Login
          </Link>
        </li>
        <li>
          <button
            onClick={toggleDarkMode}
            className="hover:text-yellow-400 transition-colors duration-300 text-xl"
            title="Toggle Theme"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
