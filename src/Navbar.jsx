import React, { useState } from 'react';
import "./App.css"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-5" id='home'>
      <h1 className='text-3xl font-bold'>React First App</h1>
      <div className="flex md:hidden">
        <button id="hamburger" onClick={toggleMenu} className='text-white'>
          <img
            className={`toggle ${!isMenuOpen ? 'block' : 'hidden'}`}
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="40"
            height="40"
            alt="Menu"
          />
          <img
            className={`toggle ${isMenuOpen ? 'block' : 'hidden'}`}
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="40"
            height="40"
            alt="Close"
          />
        </button>
      </div>
      <div className={`toggle ${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none`}>
        <a href="#home" className="block md:inline-block text-white text-lg text-center font-semibold hover:text-amber-400 px-3 py-3 border-b-2 border-blue-900 md:border-none">Home</a>
        <a href="#" className="block md:inline-block text-white text-lg text-center font-semibold hover:text-amber-400 px-3 py-3 border-b-2 border-blue-900 md:border-none">About</a>
        <a href="#services" className="block md:inline-block text-white text-lg text-center font-semibold hover:text-amber-400 px-3 py-3 border-b-2 border-blue-900 md:border-none">Services</a>
        <a href="#" className="block md:inline-block text-white text-lg text-center font-semibold hover:text-amber-400 px-3 py-3 border-b-2 border-blue-900 md:border-none">Contact</a>
      </div>
      <a href="#" className={`toggle ${isMenuOpen ? 'block' : 'hidden'} md:flex w-full md:w-auto px-4 py-2  bg-blue-900 hover:bg-blue-500 text-white md:rounded text-center`}>Create Account</a>
    </nav>
  );
};

export default Navbar;
