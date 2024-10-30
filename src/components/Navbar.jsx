// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

/**
 * Navbar Component
 * A responsive navigation bar that includes a logo, navigation links, and a mobile menu
 * Handles both desktop and mobile views with a hamburger menu for smaller screens
 * @returns {JSX.Element} Rendered Navbar compoånent
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='flex justify-center items-center pt-3 px-4 animate-fadeIn'>
        <div className="bg-black text-white h-auto p-5 w-full max-w-[1200px] rounded-lg items-center transition-all duration-500 ease-in-out hover:shadow-lg transform hover:-translate-y-1">
            <nav className="flex items-center justify-between flex-wrap">
                <div className=''>
                    <div className="logo transform transition-all duration-500 hover:scale-110 hover:rotate-3">LOGO</div>
                </div>

                {/* Desktop Navigation */}
                <div className='navbar-list hidden md:block transition-all duration-500 ease-in-out'>
                    <ul className='flex items-center space-x-5'>
                        <li className='nav-li'><a href='#' className='nav-link hover:text-gray-300 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'>Home</a></li>
                        <li className='nav-li'><a href='#' className='nav-link hover:text-gray-300 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'>About</a></li>
                        <li className='nav-li'><a href='#' className='nav-link hover:text-gray-300 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'>Projects</a></li>
                        <li className='nav-li'><a href='#' className='nav-link hover:text-gray-300 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'>Contacts</a></li>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <div 
                    className='md:hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-180'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className='space-y-2'>
                        <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2.5' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2.5' : ''}`}></span>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`navbar-list-mobile w-full md:hidden mt-4 transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className='flex flex-col space-y-4'>
                        <li className='nav-li animate-slideRight'><a href='#' className='nav-link hover:text-gray-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block'>Home</a></li>
                        <li className='nav-li animate-slideRight delay-100'><a href='#' className='nav-link hover:text-gray-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block'>About</a></li>
                        <li className='nav-li animate-slideRight delay-200'><a href='#' className='nav-link hover:text-gray-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block'>Projects</a></li>
                        <li className='nav-li animate-slideRight delay-300'><a href='#' className='nav-link hover:text-gray-300 transition-all duration-300 hover:translate-x-2 hover:scale-105 inline-block'>Contacts</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
  )
}