'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="sticky top-0 z-50 glass-panel border-b-0 border-b-white/5">
        <div className="nexus-container flex h-full flex-col">
          <div className="flex items-center justify-between whitespace-nowrap py-4">
            <div className="nexus-nav-brand">
              <div className="nexus-nav-icon">
                <span className="material-symbols-outlined text-[20px]">dataset</span>
              </div>
              <span className="text-white">Cody Bradshaw</span>
            </div>
            
            {/* Hamburger Trigger - Visible on all screens now as requested */}
            <button 
              onClick={toggleMenu}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-text-muted hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Drawer */}
      <div 
        className={`fixed inset-0 z-[60] transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={toggleMenu}
        ></div>

        {/* Drawer Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-[300px] bg-surface-dark border-l border-white/10 shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex justify-between items-center p-6 border-b border-white/5">
            <h3 className="text-white font-display font-bold text-lg">Menu</h3>
            <button 
              onClick={toggleMenu}
              className="text-text-muted hover:text-white transition-colors"
            >
              <FiX className="text-2xl" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col p-6 gap-6">
            <Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                // Add download logic here or href to file
                console.log("Downloading resume...");
                toggleMenu();
              }}
              className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors text-lg font-medium group"
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">download</span>
              Resume
            </Link>

            <Link 
              href="https://www.linkedin.com/in/cody-bradshaw-41965017b/" 
              target="_blank"
              className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors text-lg font-medium group"
              onClick={toggleMenu}
            >
              <FaLinkedin className="text-xl group-hover:text-primary transition-colors" />
              LinkedIn
            </Link>

            <Link 
              href="https://github.com/Bradshawrc93" 
              target="_blank"
              className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors text-lg font-medium group"
              onClick={toggleMenu}
            >
              <FaGithub className="text-xl group-hover:text-primary transition-colors" />
              GitHub
            </Link>

            <Link 
              href="#apps" 
              className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors text-lg font-medium group"
              onClick={toggleMenu}
            >
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">grid_view</span>
              Apps
            </Link>
          </nav>

          <div className="p-6 border-t border-white/5">
             <p className="text-xs text-text-muted text-center">© 2026 Cody Bradshaw</p>
          </div>
        </div>
      </div>
    </>
  );
}
