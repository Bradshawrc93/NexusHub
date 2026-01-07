# Role: Senior Full-Stack Engineer / AI Architect
# Task: Build "NexusHub" - A Headless AI Portfolio Control Plane

## 1. Context & Tech Stack
Build a Next.js 15 (App Router) application based on the provided HTML/Tailwind design.
- Framework: Next.js 15, TypeScript, Tailwind CSS.
- Architecture: Headless Hub-and-Spoke.
- Design Language: Bento-style, Glassmorphism, Dark Tech Theme (#0f1115).
- Communication Pattern: Next.js Route Handlers as a Server-Side Proxy (BFF).

## 2. Core Requirements

### A. The "Project Registry" System
- Create a `src/config/projects.ts` file that stores an array of project objects.
- Each project must have: `id`, `title`, `status` (active/architecting/backlog), `techStack[]`, `description`, and `metrics`.
- The Landing Page (Bento Grid) must dynamically map over this registry to generate the App Cards.

### B. The Server-Side Proxy (BFF)
- Implement a dynamic route handler at `app/api/proxy/[projectId]/route.ts`.
- It must:
  1. Catch requests from the frontend.
  2. Map `projectId` to a target Spoke URL (e.g., a Render FastAPI URL).
  3. Inject `OPENROUTER_API_KEY` or other secrets from `.env.local`.
  4. Return the response to the frontend.

### C. UX & UI Implementation (Based on Design Code)
- Convert the provided static HTML/Tailwind code into clean, reusable React Components.
- Implement **Skeleton Screens**: Create a `BentoSkeleton` component using Tailwind's `animate-pulse` for use during API fetch states.
- Responsive Design: Ensure the Bento grid stacks for mobile. Replace live iframes/complex charts with a "Video Preview + Link" component on small screens to maintain UX stability.

### D. The "Ask AI" Persistent Widget
- Implement the "Ask AI" button as a global layout component.
- For now, it should toggle a simple chat modal.
- Connect this modal to a local Next.js Route Handler that calls OpenRouter (Claude 3.5 Sonnet) to answer questions about the portfolio.

## 3. Implementation Instructions
1. First, set up the project structure and global CSS (Tailwind config, custom glass-panel classes).
2. Build the Landing Page using the provided "NexusHub" design.
3. Use the Project Registry to populate the cards. Apps with status "architecting" should show a "Roadmap" badge.
4. Set up the API Proxy folder structure for future Spoke integration.