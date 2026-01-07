import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="nexus-container py-16 md:py-24" id="about">
      <div className="flex flex-col gap-10 items-center">
        {/* Avatar with Glow */}
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-primary blur-2xl opacity-20 rounded-full"></div>
          <div 
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-white/10 p-1 bg-surface-dark shadow-2xl overflow-hidden bg-cover bg-top" 
            style={{ backgroundImage: "url('/headshot.jpg')" }}
          >
          </div>
        </div>
        {/* Bio Content */}
        <div className="flex flex-col gap-6 text-center">
          <div className="space-y-2">
            <h1 className="text-white text-4xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight">
              Turning Operational Complexity into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Executive Clarity</span>.
            </h1>
            <h2 className="text-base md:text-lg text-primary/90 font-medium font-display pt-2">
              Sr. Manager, Product Ops • AI Engineer Enthusiast
            </h2>
            <p className="text-text-muted text-base font-body leading-relaxed max-w-xl mx-auto pt-2">
              From Pre-Seed to Series B acquisition, I’ve led 75+ person global teams and managed $15M+ in ARR. I specialize in the "Architecture of Delivery"—designing the high-leverage systems and intelligent workflows that turn fragmented organizational data into high-fidelity strategic signals. I’m a leader by trade, but an AI-augmented tinkerer by choice, building the tools that help organizations move faster and smarter.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="flex items-center gap-2 h-11 px-6 rounded-lg bg-surface-dark border border-white/10 hover:border-primary/50 text-white font-medium transition-all group cursor-pointer">
              <span className="material-symbols-outlined text-primary text-[20px]">download</span>
              <span>Download Resume</span>
            </button>
            <div className="flex gap-3">
              <Link 
                className="w-11 h-11 rounded-lg bg-surface-dark border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/5 transition-colors" 
                href="https://github.com/Bradshawrc93"
                target="_blank"
              >
                <FaGithub className="text-xl" />
              </Link>
              <Link 
                className="w-11 h-11 rounded-lg bg-surface-dark border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/5 transition-colors" 
                href="https://www.linkedin.com/in/cody-bradshaw-41965017b/"
                target="_blank"
              >
                <FaLinkedin className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
