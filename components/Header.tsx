
import React, { useState } from 'react';
import { LOGO_B64 } from '../constants';

interface HeaderProps {
    onNavigate: (page: 'home' | 'tools') => void;
    onShowModal: (modal: 'about' | 'privacy') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onShowModal }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = (
        <>
            <button onClick={() => onNavigate('home')} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Home</button>
            <button onClick={() => onNavigate('tools')} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Tools</button>
            <button onClick={() => onShowModal('about')} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">About</button>
            <button onClick={() => onShowModal('privacy')} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Privacy</button>
            <a href="mailto:gamerprojp2@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </>
    );

    return (
        <header className="bg-black bg-opacity-50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img className="h-8 w-8" src={LOGO_B64} alt="Flashcore AI Logo" />
                        <span className="text-white font-bold text-xl ml-3">Flashcore AI</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems}
                            <a href="https://flashcore-ai-chat-389399072475.us-west1.run.app" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold py-2 px-4 rounded-md transition-transform duration-300 hover:scale-105 ml-4">
                                Start Now
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        {navItems}
                        <a href="https://flashcore-ai-chat-389399072475.us-west1.run.app" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold py-2 px-4 rounded-md transition-transform duration-300 hover:scale-105 mt-4">
                            Start Now
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
