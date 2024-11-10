import React from 'react';

function Header() {
  return (
    <header className="bg-blue-900 fixed top-0 w-auto z-10">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-400" style={{ fontSize: "var(--logo-font-size, 2rem)" }}>
          Tours & Travels
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-10">
          <a href="#home" className="text-white hover:text-yellow-400 text-lg">
            Home
          </a>
          <a href="#Flight" className="text-white hover:text-yellow-400 text-lg">
            Flight
          </a>
          <a href="#Hotel" className="text-white hover:text-yellow-400 text-lg">
            Hotel
          </a>
          <a href="#About us" className="text-white hover:text-yellow-400 text-lg">
            About Us
          </a>
          <a href="#log in" className="text-white hover:text-yellow-400 text-lg">
            Log In
          </a>
          <a href="#Sign up" className="text-white hover:text-yellow-400 text-lg">
            Sign Up
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Menu Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
