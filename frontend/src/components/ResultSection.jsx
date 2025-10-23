import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { quizSteps } from '../data/questions.js';

const LEVELS = [
  {
    min: 35,
    title: 'Metabolism Master',
    badge: '🟢',
    message: 'You’re fully aligned with the 18-10-8-4-1 principles. Your metabolism thrives on balance and consistency.'
  },
  {
    min: 25,
    title: 'Balanced Beginner',
    badge: '🟡',
    message: 'You’re doing many things right — small adjustments in fasting or sleep will speed up results.'
  },
  {
    min: 0,
    title: 'Reset Needed',
    badge: '🔴',
    message: 'Your habits may be slowing your metabolism. Start the 21-Day 18-10-8-4-1 Challenge to reboot your system.'
  }
];

function calculateScore(answers) {
  return quizSteps.reduce(
    (acc, step) => {
      const selectedValue = answers[step.id];
      const option = step.options.find((opt) => opt.value === selectedValue);
      return {
        total: acc.total + (option?.score || 0),
        max: acc.max + Math.max(...step.options.map((opt) => opt.score || 0))
      };
    },
    { total: 0, max: 0 }
  );
}

function resolveLevel(score) {
  return LEVELS.find((level) => score >= level.min) || LEVELS[LEVELS.length - 1];
}

export default function ResultSection({ answers, onRestart }) {
  const { total, max } = useMemo(() => calculateScore(answers), [answers]);
  const level = useMemo(() => resolveLevel(total), [total]);
  const percentage = max > 0 ? Math.round((total / max) * 100) : 0;
  const focusAreas = useMemo(() => {
    const sections = quizSteps.reduce((acc, step) => {
      const selectedValue = answers[step.id];
      const selectedOption = step.options.find((opt) => opt.value === selectedValue);
      const bestScore = Math.max(...step.options.map((opt) => opt.score || 0));
      const currentScore = selectedOption?.score || 0;
      const gap = Math.max(bestScore - currentScore, 0);
      const key = step.sectionTitle;

      if (!acc.has(key)) {
        acc.set(key, {
          title: step.sectionTitle,
          subtitle: step.sectionSubtitle,
          gapScore: 0,
          suggestions: []
        });
      }

      const section = acc.get(key);
      section.gapScore += gap;

      if (gap > 0 && section.suggestions.length < 2) {
        const cleanTitle = step.title.replace(/^Q\d+\.\s*/u, '').replace(/\?$/u, '');
        section.suggestions.push(cleanTitle);
      }

      return acc;
    }, new Map());

    return Array.from(sections.values())
      .filter((section) => section.gapScore > 0)
      .sort((a, b) => b.gapScore - a.gapScore)
      .slice(0, 3);
  }, [answers]);

  const planHighlights = [
    '21-day calendar that adapts to your readiness level',
    'Metabolic meal templates matched to your fasting window',
    'Hydration, movement & recovery trackers that keep you accountable'
  ];

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex w-full max-w-4xl flex-col gap-8 overflow-hidden rounded-3xl bg-[#0D1C1F]/90 px-6 py-10 text-center text-white shadow-[0_40px_120px_rgba(6,28,30,0.6)] backdrop-blur-xl sm:px-12"
      >
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-32 top-[-40px] h-72 w-72 rounded-full bg-[#1AC6C7] blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute bottom-[-80px] right-[-40px] h-72 w-72 rounded-full bg-[#FF7043] blur-3xl sm:h-96 sm:w-96" />
        </div>

        <div className="relative z-10 flex flex-col gap-8">
          <div className="space-y-5 text-left sm:text-center">
            <div className="flex flex-col items-start justify-between gap-3 text-xs uppercase tracking-[0.3em] text-teal-200/80 sm:flex-row sm:items-center sm:text-sm">
              <span>18-10-8-4-1 Challenge Results</span>
              <span className="flex items-center gap-2 text-[0.65rem] text-white/60 sm:text-xs">
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-[#FF7043]" />
                Offer reserved for the next 15 minutes
              </span>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
                {level.badge} {level.title}
              </h2>
              <p className="text-sm uppercase tracking-[0.35em] text-white/70 sm:text-base">
                Score {total} / {max} · {percentage}% challenge-ready
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-white/85 sm:mx-auto">
                {level.message} You’ve unlocked your momentum blueprint—lock in your plan before this personalized window closes.
              </p>
            </div>
            <motion.a
              href="https://www.psychology.com.co/product-page/get-your-full-personalized-plan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#FF7043] px-6 py-4 text-lg font-semibold uppercase tracking-[0.4em] text-white shadow-[0_20px_40px_rgba(255,112,67,0.35)] transition duration-200 hover:bg-[#FF5722] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7043]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1C1F] sm:w-auto"
            >
              Get My Plan &amp; Start Today
              <span className="text-xs font-normal tracking-[0.2em] text-white/80">$9 lifetime access</span>
            </motion.a>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/50">
              Science-based • Instant Access • 7,000+ plans delivered
            </p>
          </div>

          <div className="relative grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-inner sm:grid-cols-2 sm:p-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-teal-200/80">Where to focus first</p>
              <p className="text-base text-white/80">
                We found the routines that will create the fastest metabolic shift. Your personalized plan gives daily prompts to close these exact gaps.
              </p>
              {focusAreas.length > 0 ? (
                <ul className="space-y-3 text-sm text-white/80">
                  {focusAreas.map((section) => (
                    <li key={section.title} className="rounded-2xl border border-white/5 bg-[#0F2629]/60 p-3">
                      <p className="text-sm font-semibold text-white">
                        {section.title.replace('SECTION', 'Section')}
                      </p>
                      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50">
                        {section.subtitle}
                      </p>
                      {section.suggestions.length > 0 && (
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-white/70">
                          {section.suggestions.map((suggestion) => (
                            <li key={suggestion}>Daily follow-through to master your {suggestion.toLowerCase()}.</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-2xl border border-white/10 bg-[#0F2629]/60 p-4 text-sm text-white/80">
                  You’re in the top readiness tier—your plan doubles down on stacking consistent wins.
                </div>
              )}
              <p className="text-xs text-white/60">Plan updates adapt with you—no recurring fees.</p>
            </div>

            <div className="space-y-6 rounded-2xl border border-white/10 bg-[#082024]/70 p-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#FFB792]/90">What unlocks when you continue</p>
                <ul className="space-y-3 text-sm text-white/85">
                  {planHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-gradient-to-br from-[#FF7043] to-[#FFB792]" />
                      <span>{item}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-gradient-to-br from-teal-300 to-teal-500" />
                    <span>Private progress dashboard with momentum alerts to keep you on track.</span>
                  </li>
                </ul>
                <div className="rounded-2xl bg-[#10363B]/80 p-4 text-left text-xs text-white/70">
                  <p className="font-semibold uppercase tracking-[0.3em] text-teal-200/80">Why now</p>
                  <p className="mt-2 text-sm text-white/85">
                    Only 250 challenge slots are refreshed each day. Secure yours now so your score doesn’t reset and you keep your tailored starting point.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-black/30 p-5 text-left text-sm text-white/80">
                <p className="text-base font-semibold text-white">“I followed the exact 21-day calendar and watched my afternoon crashes disappear. The trackers made the new habits automatic.”</p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/60">— Daniela M., 38 • Lost 6 lbs &amp; doubled energy</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-white/50">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1"><span className="h-2 w-2 rounded-full bg-teal-300" /> Verified Challenge Graduate</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1"><span className="h-2 w-2 rounded-full bg-[#FF7043]" /> Psychology.com.co</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-left sm:text-center">
            <div className="space-y-3 text-sm text-white/75">
              <p>
                Activate your 21-day sequence now and wake up tomorrow with a guided calendar telling you exactly when to fast, fuel, hydrate, and reset.
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">One-time $17 • Yours for life</p>
            </div>

            <motion.a
              href="https://www.psychology.com.co/product-page/get-your-full-personalized-plan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#FF7043] via-[#FF8A50] to-[#FFB792] px-6 py-4 text-lg font-semibold uppercase tracking-[0.4em] text-[#2A0B02] shadow-[0_20px_60px_rgba(255,112,67,0.45)] transition duration-200 hover:from-[#FF5722] hover:via-[#FF7043] hover:to-[#FFAB91] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7043]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1C1F] sm:w-auto"
            >
              Get My Full Personalized Plan →
              <span className="text-xs font-semibold tracking-[0.2em] text-[#421404]">Secure my spot</span>
            </motion.a>

            <div className="flex flex-col items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-white/50 sm:flex-row">
              <span>Instant download • No subscriptions • Cancel anytime before charge</span>
              {onRestart && (
                <button
                  type="button"
                  onClick={onRestart}
                  className="rounded-full border border-white/40 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/80 hover:bg-white/10"
                >
                  Retake Quiz
                </button>
              )}
            </div>
          </div>

          <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40">
            © Psychology.com.co — Science-based tools for better health.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
