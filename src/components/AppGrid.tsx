import { projects } from '@/config/projects';

export default function AppGrid() {
  return (
    <section className="nexus-container py-12" id="apps">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-white text-2xl font-display font-bold tracking-tight">Application Showcase</h2>
        <div className="h-[1px] flex-1 bg-white/10 ml-6"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group relative bg-surface-dark border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 hover:translate-y-[-4px] transition-all duration-300">
            <div className="aspect-[16/9] w-full bg-cover bg-center relative" style={{ backgroundImage: project.thumbnail ? `url('${project.thumbnail}')` : undefined }}>
              <div className={`absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent opacity-90 ${!project.thumbnail ? 'bg-surface-dark' : ''}`}></div>
            </div>
            <div className="p-5 relative">
              {project.metrics && (
                <div className="absolute -top-10 right-5 bg-surface-dark border border-white/10 rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                  {project.metrics.icon && <span className="material-symbols-outlined text-primary text-sm">{project.metrics.icon}</span>}
                  <span className="text-xs font-bold text-white">{project.metrics.value} {project.metrics.label}</span>
                </div>
              )}
              <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-text-muted text-sm line-clamp-2">{project.description}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 rounded bg-white/5 text-[10px] text-text-muted border border-white/5">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

