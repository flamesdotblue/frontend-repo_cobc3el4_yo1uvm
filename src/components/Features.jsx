import { Database, Shield, Server, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Database className="h-5 w-5" />,
    title: 'Smart data models',
    desc: 'Define your entities in plain English. We generate clean Pydantic schemas and MongoDB collections automatically.'
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: 'Backend first',
    desc: 'FastAPI endpoints come with validation, pagination and best‑practice patterns baked in.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Production ready',
    desc: 'Auth scaffolds, input sanitization, and error guards so you can ship with confidence.'
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Beautiful UI',
    desc: 'Polished React components with Tailwind and delightful micro‑interactions out of the box.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Everything you need to go from idea to app</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Focus on your product, not the plumbing. Our AI assembles the right pieces, perfectly aligned.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
