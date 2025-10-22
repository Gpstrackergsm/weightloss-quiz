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

        <p className="max-w-xl text-lg leading-relaxed text-white/85">{level.message}</p>

        <motion.a
          href="https://www.psychology.com.co/product-page/get-your-full-personalized-plan"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center rounded-full bg-[#FF7043] px-8 py-3 text-base font-semibold uppercase tracking-wide text-white shadow-md transition-colors duration-200 hover:bg-[#F4511E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4511E]/70 focus-visible:ring-offset-2"
        >
          Get Your Full Personalized Plan →
        </motion.a>

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
