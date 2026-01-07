export default function BentoSkeleton() {
  return (
    <div className="bg-surface-dark border border-white/5 rounded-xl overflow-hidden animate-pulse h-full min-h-[300px]">
      <div className="aspect-[16/9] w-full bg-white/5"></div>
      <div className="p-5 space-y-3">
        <div className="h-6 bg-white/10 rounded w-3/4"></div>
        <div className="h-4 bg-white/5 rounded w-full"></div>
        <div className="h-4 bg-white/5 rounded w-1/2"></div>
        <div className="flex gap-2 mt-4">
          <div className="h-5 w-12 bg-white/5 rounded"></div>
          <div className="h-5 w-12 bg-white/5 rounded"></div>
        </div>
      </div>
    </div>
  );
}

