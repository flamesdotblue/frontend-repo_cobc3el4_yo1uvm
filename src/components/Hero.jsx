import { Rocket, Zap, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Zap size={14} />
              Build full‑stack web apps, instantly
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Your AI engineer for shipping production apps
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Describe what you want. Our AI plans your data models, generates a FastAPI backend, a beautiful React frontend, and wires it all together. Deployed in minutes, not months.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800">
                <Rocket size={18} />
                Start Building
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-slate-800 font-medium hover:bg-slate-50">
                <Code size={18} />
                See what it makes
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-slate-500">
              <div>
                <div className="font-semibold text-slate-900 text-xl">10x</div>
                Faster delivery
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-xl">Zero</div>
                Boilerplate
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-xl">Prod‑ready</div>
                Patterns
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-xl">Full</div>
                Ownership
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <pre className="p-6 text-sm overflow-auto leading-relaxed text-slate-800 bg-white">
{`from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Task(BaseModel):\n    title: str\n    done: bool = False\n\n@app.post('/tasks')\nasync def create_task(task: Task):\n    return { 'message': 'created', 'task': task }`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
