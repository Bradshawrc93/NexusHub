export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'architecting' | 'backlog';
  techStack: string[];
  metrics?: {
    label: string;
    value: string | number;
    icon?: string; // Material symbol name
    trend?: string;
  };
  thumbnail?: string;
  theme?: {
    color: string;
    llm: string;
    uptime?: number;
  };
}

export const projects: Project[] = [
  {
    id: 'fintrack',
    title: 'FinTrack',
    description: 'Personal finance visualizer for tracking subscriptions and recurring costs.',
    status: 'active',
    techStack: ['Next.js', 'Chart.js'],
    metrics: {
      label: 'Saved',
      value: '$4k',
      icon: 'savings'
    },
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_J1c4-RZWJLm2Tn5xcGAlXxmDbR5HVcggMa0UE0A3MRZY-0APhpyOk2c0Himppz843XkCGo_PZDVagXo2rQKea70KNEeWGSo0ZL7eBf29gw0QF88NA-j9_9P0QXarQNHi228DFrsf09vIChCY2ZJhnWBQkdjOmpptG6ET31de96AJBJ95r7cKiZY9jMT6rn5CH4uc1YPg_JfU3wYb17R0f6KAXXQMUO3sSGC2-maQDIeq1og3LDroLm_oWhyG9wc5mmkp3rtf478',
    theme: {
      color: '#00bad6', // Cyan
      llm: 'Powered by GPT-4o',
      uptime: 99.9
    }
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    description: 'Kanban for solo devs focused on deep work and flow state management.',
    status: 'active',
    techStack: ['React', 'Supabase'],
    metrics: {
      label: 'Active Users',
      value: '200',
      icon: 'person'
    },
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHFa2tu6wc-3K6dsQV9Hb2dO1AWDdpTBWpg2MBap-gNmurtnjihrf4ZOZ_5nE41yOE6DTux0uop9jn_q0LQjKz2dlQNBhn-DJuVi61nnupDe9v19EcY9mHAi2JcUuE4zgbYsWXC8mhNYLsM3TTRlCsJTwMxvxV8mvt_n64kvvAfEF6zdTgg8HfO7qQjIWgMcQYsWnIOoN6S2VzcsoVIU9SkRSCETUwtCLbEG7cf2V30QvuxY0I5EScdBHjEUxToRVyLxMi2e6qU3k',
    theme: {
      color: '#F03A70', // Pink
      llm: 'Powered by Claude 3.5 Sonnet',
      uptime: 99.5
    }
  },
  {
    id: 'devhub',
    title: 'DevHub',
    description: 'Snippet repository manager with instant search and VS Code integration.',
    status: 'active',
    techStack: ['Electron', 'TypeScript'],
    metrics: {
      label: 'Stars',
      value: '1.5k',
      icon: 'star'
    },
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB596sdWh0G4a8OcDqj2-HVLqq94B5etdr1gaNZq8fYXxEIl7RWF5I82h2FewVO-rPN6VruJsu4Vxuj4GXpnEjUD2aO0PT8imM6yAjI89vLpA-6qrDIBaRBbh_ACz1R9uOKS525n3BLxeBIWiCk-hZ-5qZJJJ-9tk0pXTe7uO9KwIXlL6kcxRKJGHzXx080zgJspdmmHnF0xx0cBXcXcKQgUipyYg4wUpVpLOXlLwaZE8rI4uaBZYYMTG0BojVGcy906uLDOks-afI',
    theme: {
      color: '#F59E0B', // Amber
      llm: 'Powered by Gemini Pro 1.5',
      uptime: 98.2
    }
  },
  {
    id: 'nexushub-v2',
    title: 'NexusHub v2',
    description: 'The next generation of this portfolio, featuring real-time AI agents.',
    status: 'architecting',
    techStack: ['Next.js 15', 'OpenRouter'],
    metrics: {
      label: 'ETA',
      value: 'Q3 2026',
      icon: 'schedule'
    },
    theme: {
      color: '#8B5CF6', // Violet
      llm: 'Powered by DeepSeek V3',
      uptime: 100
    }
  },
  {
    id: 'algo-visual',
    title: 'AlgoVisual',
    description: 'Interactive sorting algorithm visualizer with step-by-step execution.',
    status: 'backlog',
    techStack: ['Svelte', 'D3.js'],
    theme: {
      color: '#10B981', // Emerald
      llm: 'Powered by Llama 3 70B',
      uptime: 0
    }
  }
];
