import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Clinically-inspired structure',
    description: 'Follow the 18-10-8-4-1 rhythm to reset habits with metabolic momentum.',
  },
  {
    title: 'Precision habit scoring',
    description: 'Each answer reveals the next best move to rebalance nutrition, movement, and recovery.',
  },
  {
    title: 'Personalized roadmap',
    description: 'Get a curated 21-day plan aligned to your current readiness and daily routine.',
  },
];

const checkpoints = [
  'Audit your routines across energy, hydration, and nourishment.',
  'Unlock the metabolic accelerators that match your profile.',
  'Receive a tailored next-step checklist to keep you accountable.',
];

export default function LandingSection({ onStart }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A1416] via-[#1F3A3C] to-[#355756] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-14 pt-12 md:px-10">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold uppercase tracking-[0.25em]">
              18
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Metabolic reset quiz</p>
              <p className="text-sm text-white/70">Discover the viral 18-10-8-4-1 daily formula</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onStart}
            className="hidden rounded-full border border-white/30 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition hover:border-white/60 hover:bg-white/10 md:inline-flex"
          >
            Start quiz
          </button>
        </header>

        <main className="mt-16 flex flex-1 flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <span className="text-xs uppercase tracking-[0.45em] text-emerald-200/80">21-day metabolic reboot</span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Discover how ready your habits are for the 18-10-8-4-1 challenge
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              This rapid self-assessment pinpoints which daily rituals need an upgrade so you can create compounding metabolic
              wins in under three minutes.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold text-white">93%</p>
                <p className="mt-1 text-sm uppercase tracking-[0.25em] text-white/60">complete in under 180s</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold text-white">+2.7×</p>
                <p className="mt-1 text-sm uppercase tracking-[0.25em] text-white/60">habit adherence boost</p>
              </div>
            </div>
            <div className="mt-10 space-y-4">
              {checkpoints.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  <p className="text-sm text-white/80">{item}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={onStart}
              className="mt-12 inline-flex items-center justify-center rounded-full bg-white px-10 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-brand transition hover:bg-white/80"
            >
              Start quiz now
            </button>
            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-white/60">15 questions • tailored results • instant plan</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex-1"
          >
            <div className="rounded-[2.5rem] border border-white/10 bg-white/5 py-8 px-0 shadow-2xl backdrop-blur sm:px-8">
              <div className="rounded-3xl border border-white/10 bg-black/20 py-6 px-0 sm:px-6">
                <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/80">What&apos;s inside</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">Your metabolic alignment blueprint</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Built with behavioral science and nutrition coaching cues, this quiz uncovers the micro-shifts that unlock energy
                  stability, cravings control, and better recovery.
                </p>
                <div className="mt-6 space-y-4">
                  {highlights.map((highlight) => (
                    <div key={highlight.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">{highlight.title}</p>
                      <p className="mt-2 text-sm text-white/70">{highlight.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Trusted by coaches</p>
                  <p className="mt-2 text-sm text-white/60">Used in 230+ transformation programs to accelerate habit alignment.</p>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
