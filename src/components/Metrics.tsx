'use client';

import { projects } from '@/config/projects';
import { useState, useEffect } from 'react';

// Mock data generator for chart lines
const generateChartData = (projectId: string, seed: number) => {
  // Generate a somewhat random path but deterministic based on seed
  const points = [];
  let y = 100 + (seed % 50);
  for (let x = 0; x <= 800; x += 80) { // 10 points
    y = y + (Math.sin(x / 100 + seed) * 30) + (Math.random() * 20 - 10);
    // Clamp y
    y = Math.max(20, Math.min(180, y));
    points.push(`${x},${y}`);
  }
  return `M${points.join(' L')}`;
};

export default function Metrics() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [chartPaths, setChartPaths] = useState<Record<string, string>>({});

  // Filter projects that have themes (active/architecting ones mostly)
  const activeProjects = projects.filter(p => p.theme);

  useEffect(() => {
    // Generate paths on client-side only to avoid hydration mismatch
    const paths: Record<string, string> = {};
    activeProjects.forEach((project, index) => {
      paths[project.id] = generateChartData(project.id, index * 100);
    });
    setChartPaths(paths);
  }, []);

  return (
    <section className="nexus-container py-12 pb-24" id="metrics">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-white text-2xl font-display font-bold tracking-tight">System Metrics &amp; Costs</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 rounded-md text-xs font-bold bg-primary text-background-dark">Cost</button>
          <button className="px-3 py-1.5 rounded-md text-xs font-medium text-text-muted hover:bg-white/5">Traffic</button>
          <button className="px-3 py-1.5 rounded-md text-xs font-medium text-text-muted hover:bg-white/5">Uptime</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Panel */}
        <div className="lg:col-span-2 bg-surface-dark border border-white/5 rounded-xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-sm font-medium text-text-muted">Monthly API Usage Costs</h4>
              <p className="text-2xl font-display font-bold text-white mt-1">$42.00 <span className="text-xs font-normal text-green-400 font-body">(-12% vs last month)</span></p>
            </div>
            {/* Color Key Legend */}
            <div className="flex gap-3 flex-wrap justify-end max-w-[200px]">
              {activeProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="flex items-center gap-1.5 cursor-pointer group"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div 
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${hoveredProject === project.id ? 'scale-150' : ''}`}
                    style={{ backgroundColor: project.theme?.color }}
                  ></div>
                  <span className={`text-[10px] uppercase font-bold transition-colors ${hoveredProject === project.id ? 'text-white' : 'text-text-muted'}`}>
                    {project.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Multi-Line SVG Chart */}
          <div className="w-full h-[250px] relative">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200">
              {/* Grid Lines */}
              <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="0" y2="0"></line>
              <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>
              <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="100" y2="100"></line>
              <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
              <line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="0" x2="800" y1="200" y2="200"></line>
              
              {/* Chart Lines */}
              {activeProjects.map((project) => {
                const pathData = chartPaths[project.id];
                // Render nothing if paths aren't generated yet (SSR hydration match)
                if (!pathData) return null;

                const isHovered = hoveredProject === project.id;
                const isDimmed = hoveredProject !== null && !isHovered;
                
                return (
                  <g key={project.id} className="transition-all duration-300">
                    <path 
                      d={pathData} 
                      fill="none" 
                      stroke={project.theme?.color} 
                      strokeWidth={isHovered ? "4" : "2"}
                      strokeLinecap="round" 
                      className={`transition-all duration-300 ${isDimmed ? 'opacity-20' : 'opacity-100'}`}
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    />
                    {/* Tooltip on Line Hover (Simplified for SVG interaction) */}
                    {isHovered && (
                      <foreignObject x="400" y="10" width="300" height="50">
                        <div className="flex justify-center">
                           <div 
                             className="px-3 py-1.5 rounded bg-surface-dark border text-xs text-white shadow-xl whitespace-nowrap z-10"
                             style={{ borderColor: project.theme?.color }}
                           >
                             <span className="font-bold">{project.title}: </span>
                             <span className="text-text-muted">{project.theme?.llm}</span>
                           </div>
                        </div>
                      </foreignObject>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
          {/* X-Axis */}
          <div className="flex justify-between mt-2 text-xs text-text-muted uppercase font-medium">
            <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
          </div>
        </div>

        {/* Health Grid & Stat Cards */}
        <div className="flex flex-col gap-4">
          {/* Health Grid Component */}
          <div className="bg-surface-dark border border-white/5 rounded-xl p-5">
            <h5 className="text-text-muted text-xs font-medium uppercase tracking-wider mb-4">System Health</h5>
            <div className="grid grid-cols-2 gap-3">
              {activeProjects.map((project) => (
                <div key={project.id} className="flex items-center justify-between bg-white/5 rounded px-3 py-2 border border-white/5">
                  <span className="text-xs font-bold text-white truncate max-w-[70px]">{project.title}</span>
                  <div className="flex items-center gap-1.5">
                     <div 
                       className={`w-1.5 h-1.5 rounded-full ${project.theme?.uptime && project.theme.uptime > 99 ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}
                     ></div>
                     <span className="text-[10px] font-mono text-text-muted">{project.theme?.uptime}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-dark border border-white/5 rounded-xl p-5 flex items-center justify-between group hover:border-white/20 transition-colors">
            <div>
              <p className="text-text-muted text-xs font-medium uppercase tracking-wider mb-1">Resume Downloads</p>
              <p className="text-2xl font-display font-bold text-white">403</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
              <span className="material-symbols-outlined">download</span>
            </div>
          </div>
          
          <div className="bg-surface-dark border border-white/5 rounded-xl p-5 flex items-center justify-between group hover:border-white/20 transition-colors">
            <div>
              <p className="text-text-muted text-xs font-medium uppercase tracking-wider mb-1">AI Assistant Chats</p>
              <p className="text-2xl font-display font-bold text-white">1,240</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
              <span className="material-symbols-outlined">chat_bubble</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
