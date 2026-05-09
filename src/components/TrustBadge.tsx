import { ShieldCheck, RefreshCcw } from 'lucide-react';

export function TrustBadge() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up">
      <div className="bg-brand-dark/70 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 rounded-full px-6 py-3 flex items-center gap-6 whitespace-nowrap">
        <div className="flex items-center gap-2 text-white cursor-pointer group">
          <ShieldCheck className="w-4 h-4 text-brand-gold group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium tracking-widest">ブランド保証</span>
        </div>
        <div className="w-px h-4 bg-white/20" />
        <div className="flex items-center gap-2 text-white cursor-pointer group">
          <RefreshCcw className="w-4 h-4 text-brand-gold group-hover:rotate-180 transition-transform duration-500" />
          <span className="text-xs font-medium tracking-widest">無料返品</span>
        </div>
      </div>
    </div>
  );
}
