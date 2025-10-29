import { Rocket, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white shadow-sm">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-slate-900 text-lg">VibeForge AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#how" className="hover:text-slate-900 transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Settings size={16} />
            Docs
          </button>
          <a href="#cta" className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow hover:bg-slate-800">
            Launch Studio
          </a>
        </div>
      </div>
    </header>
  );
}
