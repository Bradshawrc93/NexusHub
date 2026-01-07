'use client';

import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Minimized Chat Bubbles (Context) - Only show if not open and user hasn't dismissed it */}
      {!isOpen && showTeaser && (
        <div className="relative glass-panel rounded-lg p-3 max-w-[250px] shadow-lg mb-2 border-l-4 border-l-primary transform translate-y-2 opacity-0 animate-fade-in-up pr-8">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowTeaser(false);
            }}
            className="absolute top-2 right-2 text-text-muted hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
          <p className="text-xs text-text-muted mb-1 font-bold">AI Assistant</p>
          <p className="text-sm text-white">Curious about a project or about me? Ask me anything!</p>
        </div>
      )}

      {/* Chat Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-surface-dark hover:bg-primary border border-primary/30 hover:border-primary text-primary hover:text-background-dark py-3 px-5 rounded-full shadow-glow transition-all duration-300 group cursor-pointer"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-accent"></span>
        </span>
        <span className="font-bold font-display text-sm">{isOpen ? 'Close' : 'AI Assistant'}</span>
        <span className={`material-symbols-outlined transition-transform ${isOpen ? 'rotate-180' : 'group-hover:rotate-12'}`}>
          {isOpen ? 'close' : 'smart_toy'}
        </span>
      </button>
      
      {/* Actual Chat Modal Placeholder */}
      {isOpen && (
         <div className="glass-panel w-[350px] h-[500px] rounded-xl flex flex-col overflow-hidden animate-fade-in-up" style={{ animationDelay: '0s' }}>
            <div className="p-4 bg-primary/10 border-b border-white/5 flex justify-between items-center">
              <h3 className="font-bold text-white">AI Assistant</h3>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
               <div className="bg-white/5 rounded-lg p-3 mb-2 max-w-[80%]">
                 <p className="text-sm text-white">Hello! I'm Cody's AI Assistant. I can tell you about the projects, Cody, or answer any questions about his resume.</p>
               </div>
            </div>
            <div className="p-4 border-t border-white/5">
              <input type="text" placeholder="Type a message..." className="w-full bg-surface-dark border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-primary" />
            </div>
         </div>
      )}
    </div>
  );
}
