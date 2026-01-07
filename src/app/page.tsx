import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AppGrid from '@/components/AppGrid';
import Metrics from '@/components/Metrics';
import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 pointer-events-none tech-grid-bg z-0"></div>
      
      {/* Sticky Navbar */}
      <Navbar />

      <main className="flex-1 relative z-10 flex flex-col items-center w-full">
        <Hero />
        <AppGrid />
        <Metrics />
      </main>
      
      <ChatWidget />
    </div>
  );
}
