import { motion } from 'framer-motion';

export default function LandingSection({ onStart }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl rounded-3xl bg-white/10 p-10 text-center shadow-2xl backdrop-blur-lg"
      >
        <span className="text-sm uppercase tracking-[0.3em] text-white/60">Bioma Style Quiz</span>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          Discover Your Personalized Weight-Loss Strategy
        </h1>
        <p className="mt-4 text-lg text-white/80">Takes under 2 minutes · No email required</p>
        <button
          onClick={onStart}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg font-semibold text-brand transition hover:bg-white/80"
        >
          Start Quiz
        </button>
      </motion.div>
    </div>
  );
}
