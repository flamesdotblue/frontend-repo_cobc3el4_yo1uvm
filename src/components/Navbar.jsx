import { Rocket, Settings } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white shadow-sm">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-slate-900 dark:text-white text-lg">VibeForge AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
          <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#how" className="hover:text-slate-900 dark:hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60">
            <Settings size={16} />
            Docs
          </button>
          <a href="#cta" className="inline-flex items-center rounded-lg bg-slate-900 dark:bg-white px-3 py-2 text-sm font-medium text-white dark:text-slate-900 shadow hover:bg-slate-800 dark:hover:bg-slate-100">
            Launch Studio
          </a>
        </div>
      </div>
    </header>
  );
}
