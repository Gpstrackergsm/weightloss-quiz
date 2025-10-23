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
        className="flex w-full max-w-2xl flex-col items-center gap-8 rounded-3xl bg-white/10 px-6 py-10 text-center shadow-2xl backdrop-blur-lg sm:px-10"
      >
        <div className="space-y-2">
          <span className="text-sm uppercase tracking-[0.3em] text-white/60">18-10-8-4-1 Challenge Results</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {level.badge} {level.title}
          </h2>
          <p className="text-white/70">Score: {total} / {max} · {percentage}% ready</p>
        </div>

        <p className="max-w-xl text-lg leading-relaxed text-white/85">
          {level.message} You just invested a few focused minutes — now turn these insights into a daily routine that compounds.
        </p>

        {focusAreas.length > 0 && (
          <div className="w-full max-w-xl space-y-3 rounded-2xl border border-white/15 bg-black/20 p-6 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200/80">Your top focus areas</p>
            <ul className="space-y-3 text-sm text-white/75">
              {focusAreas.map((section) => (
                <li key={section.title} className="rounded-xl border border-white/5 bg-white/5 p-3">
                  <p className="font-semibold text-white/90">{section.title.replace('SECTION', 'Section')}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">{section.subtitle}</p>
                  {section.suggestions.length > 0 && (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-white/70">
                      {section.suggestions.map((suggestion) => (
                        <li key={suggestion}>Dial in your {suggestion.toLowerCase()}.</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/60">Your personalized plan gives you plug-and-play actions to close these gaps fast.</p>
          </div>
        )}

        <div className="w-full max-w-xl space-y-4 rounded-2xl border border-[#FF7043]/30 bg-[#251814]/80 p-6 text-left shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#FFAB91]">What you unlock</p>
          <ul className="space-y-2 text-sm text-white/80">
            {planHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#FFAB91]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-white/60">Delivered instantly with lifetime access — plus a 7-day adherence jumpstart checklist.</p>
        </div>

        <motion.a
          href="https://www.psychology.com.co/product-page/get-your-full-personalized-plan"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center rounded-full bg-[#FF7043] px-10 py-3 text-base font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition-colors duration-200 hover:bg-[#F4511E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4511E]/70 focus-visible:ring-offset-2"
        >
          Get Your Full Personalized Plan →
        </motion.a>
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">Instant access • Evidence-based routines • 60-day momentum guarantee</p>

        <div className="flex flex-col gap-3 text-sm text-white/70">
          <p>
            Ready to close the gaps? Keep dialing in your fasting window, movement, sleep, hydration, and protein for the next 21 days.
          </p>
          {onRestart && (
            <button
              type="button"
              onClick={onRestart}
              className="self-center rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Retake Quiz
            </button>
          )}
        </div>

        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/50">
          © Psychology.com.co — Science-based tools for better health.
        </p>
      </motion.div>
    </div>
  );
}
