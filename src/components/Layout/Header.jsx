import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-off-white text-dark-grey py-4 border-b-3 border-retro-black'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <Link
          to='/'
          className='text-2xl md:text-3xl lg:text-4xl font-bold font-retro'
        >
          Web3 Compass
        </Link>

        <nav className='hidden md:flex space-x-4'>
          <Link to='/starter-packs' className='retro-button hover:text-black'>
            <span className='font-bold'>#1</span> Starters
          </Link>
          <Link to='/explainer' className='retro-button hover:text-black'>
            <span className='font-bold'>#2</span> Explainers
          </Link>
          <Link to='/chart' className='retro-button hover:text-black'>
            <span className='font-bold'>#3</span> Charts
          </Link>
          <Link to='/commune' className='retro-button hover:text-black'>
            <span className='font-bold'>#4</span> Connectors
          </Link>
        </nav>

        <button
          className='md:hidden retro-button p-2'
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className='md:hidden bg-off-white border-t-3 border-dark-grey'>
          <Link
            to='/starter-packs'
            className='block py-2 px-4 text-center hover:bg-light-grey'
            onClick={toggleMenu}
          >
            Starters
          </Link>
          <Link
            to='/explainer'
            className='block py-2 px-4 text-center hover:bg-light-grey'
            onClick={toggleMenu}
          >
            Explainers
          </Link>
          <Link
            to='/chart'
            className='block py-2 px-4 text-center hover:bg-light-grey'
            onClick={toggleMenu}
          >
            Charts
          </Link>
          <Link
            to='/commune'
            className='block py-2 px-4 text-center hover:bg-light-grey'
            onClick={toggleMenu}
          >
            Connectors
          </Link>
          <Link
            to='/open-calls'
            className='block py-2 px-4 text-center hover:bg-light-grey'
            onClick={toggleMenu}
          >
            Open Calls
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
