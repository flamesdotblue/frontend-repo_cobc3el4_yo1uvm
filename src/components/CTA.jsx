import { MessageSquare, Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-tr from-indigo-600 to-fuchsia-600 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_0,rgba(255,255,255,0.12),transparent_35%)] pointer-events-none" />
          <div className="relative p-10 sm:p-14 lg:p-16 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold">Ship your next idea today</h3>
              <p className="mt-4 text-white/90 max-w-xl">
                Skip setup, scaffolding, and wiring. Describe your product and let our AI assemble a production‑ready stack in minutes.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-900 font-semibold shadow">
                  <Rocket size={18} />
                  Start free
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white font-semibold ring-1 ring-inset ring-white/30 hover:bg-white/15">
                  <MessageSquare size={18} />
                  Book a demo
                </a>
              </div>
              <p className="mt-4 text-xs text-white/70">No credit card required • Cancel anytime</p>
            </div>
            <div className="bg-white/10 rounded-2xl border border-white/20 p-6">
              <div className="text-sm text-white/80">What can I build?</div>
              <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
                <li className="rounded-lg bg-white/10 px-3 py-2">SaaS dashboards</li>
                <li className="rounded-lg bg-white/10 px-3 py-2">Marketplaces</li>
                <li className="rounded-lg bg-white/10 px-3 py-2">Internal tools</li>
                <li className="rounded-lg bg-white/10 px-3 py-2">Content platforms</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} VibeForge AI. All rights reserved.</p>
      </div>
    </section>
  );
}
