import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    // Initialize from localStorage or system
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
      applyTheme(stored);
    } else {
      applyTheme('system');
    }
  }, []);

  function applyTheme(next) {
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = next === 'dark' || (next === 'system' && prefersDark);
    root.classList.toggle('dark', shouldDark);
  }

  function cycleTheme() {
    const order = ['light', 'dark', 'system'];
    const currentIndex = order.indexOf(theme);
    const next = order[(currentIndex + 1) % order.length];
    setTheme(next);
    localStorage.setItem('theme', next);
    applyTheme(next);
  }

  const icon = theme === 'dark' ? <Moon size={16} /> : theme === 'light' ? <Sun size={16} /> : (
    // system: show moon if system dark else sun
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? <Moon size={16} /> : <Sun size={16} />
  );

  return (
    <button onClick={cycleTheme} className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60" aria-label="Toggle theme">
      {icon}
      <span className="hidden sm:inline">{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
    </button>
  );
}
