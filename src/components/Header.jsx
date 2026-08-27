import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../config/site';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav id="main-nav" className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${scrolled ? 'bg-surface/95 backdrop-blur-md border-primary shadow-sm' : 'bg-transparent border-transparent'}`}>
      <div className="flex justify-between items-center h-28 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Link to="/" className="flex items-center">
            <img src="/logo-bst.png" alt={siteConfig.name || "Bombay Street Logo"} className="h-16 md:h-20 object-contain" />
        </Link>
        <div className="hidden md:flex items-center bg-surface p-1.5 rounded-2xl shadow-sm border border-primary/20">
            {navItems.map(item => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`text-lg font-bold px-6 py-2 rounded-xl transition-all duration-300 ${
                    location.pathname === item.path 
                      ? 'text-on-primary bg-primary shadow-md' 
                      : 'text-primary hover:bg-primary/10'
                  }`}
                >
                  {item.name}
                </Link>
            ))}
        </div>
        <div className="flex items-center gap-4">
            <a 
              href={siteConfig.orderOnlineUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:inline-block bg-primary text-on-primary font-medium text-lg tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
                Order Online
            </a>
            <button 
              className="md:hidden text-primary hover:text-primary focus:outline-none p-2 bg-surface/80 rounded-lg shadow-sm"
              onClick={() => setIsOpen(!isOpen)}
            >
                <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
            </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-surface border-b border-primary/20 absolute w-full shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col px-margin-mobile py-6 gap-4">
            {navItems.map(item => (
                <Link 
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium px-5 py-3 rounded-xl shadow-sm border transition-all ${
                    location.pathname === item.path 
                      ? 'text-on-primary bg-primary border-primary' 
                      : 'text-primary hover:text-on-primary bg-background border-primary hover:bg-primary'
                  }`}
                >
                  {item.name}
                </Link>
            ))}
            <a 
              href={siteConfig.orderOnlineUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg font-medium text-on-primary bg-primary px-5 py-3 rounded-xl shadow-sm border border-primary hover:bg-primary/90 transition-all text-center mt-2"
            >
              Order Online
            </a>
        </div>
      </div>
    </nav>
  );
}
