export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.22),transparent_35%),radial-gradient(circle_at_85%_30%,rgba(99,102,241,0.22),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-24">
        <div className="relative rounded-2xl border border-cyan-400/25 bg-slate-900/20 p-5 shadow-[0_0_42px_rgba(56,189,248,0.12)] backdrop-blur-[2px] sm:p-7 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0">
          <h1 className="text-[32px] font-bold leading-tight text-white md:text-[42px]">
            Engineering Intelligent Digital Solutions for Modern Enterprises
          </h1>

          <p className="mt-6 text-[20px] font-medium leading-relaxed text-[#C7D2FE]">
            Techvisr delivers end-to-end technology services - from software
            development and AI research to quality engineering and scalable product
            architecture - helping businesses innovate, automate, and accelerate
            growth.
          </p>

          <p className="mt-5 text-base leading-relaxed text-[#94A3B8]">
            Trusted technology partner for startups, fintech companies, SaaS
            platforms, and enterprise organizations worldwide.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
            >
              Book a Strategy Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-slate-800"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[320px] w-full max-w-[520px] lg:h-[380px]">
          <div className="absolute inset-0 rounded-3xl border border-cyan-400/25 bg-slate-900/50 shadow-[0_0_42px_rgba(56,189,248,0.12)] lg:border-slate-700/60 lg:shadow-2xl" />
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/25 blur-2xl" />
          <div className="absolute -bottom-8 -right-6 h-28 w-28 rounded-full bg-indigo-500/25 blur-2xl" />

          <div className="absolute left-6 top-8 rounded-lg border border-cyan-300/40 bg-slate-900/70 px-4 py-2 text-xs font-medium text-cyan-200">
            AI
          </div>
          <div className="absolute right-8 top-16 rounded-lg border border-indigo-300/40 bg-slate-900/70 px-4 py-2 text-xs font-medium text-indigo-200">
            Cloud
          </div>
          <div className="absolute bottom-9 left-12 rounded-lg border border-emerald-300/40 bg-slate-900/70 px-4 py-2 text-xs font-medium text-emerald-200">
            DevOps
          </div>

          <div className="absolute left-1/2 top-[46%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-500/70 bg-slate-800/70" />
          <div className="absolute left-1/2 top-[46%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 animate-pulse" />

          <div className="absolute left-[22%] top-[38%] h-px w-[28%] rotate-[14deg] bg-slate-500/70" />
          <div className="absolute right-[21%] top-[43%] h-px w-[24%] rotate-[-8deg] bg-slate-500/70" />
          <div className="absolute left-[35%] bottom-[30%] h-px w-[26%] rotate-[-26deg] bg-slate-500/70" />

          <div className="absolute bottom-8 right-8 grid grid-cols-4 gap-2 rounded-xl border border-slate-700/60 bg-slate-900/70 p-3">
            {Array.from({ length: 12 }).map((_, idx) => (
              <span
                key={idx}
                className={`h-2.5 w-2.5 rounded-sm ${
                  idx % 3 === 0
                    ? "bg-cyan-300/80"
                    : idx % 3 === 1
                      ? "bg-indigo-300/70"
                      : "bg-slate-400/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
