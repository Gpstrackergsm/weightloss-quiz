import { motion } from 'framer-motion';
import { useState } from 'react';
import { generatePlan } from '../utils/planGenerator.js';

export default function ResultSection({ answers }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [planText, setPlanText] = useState('');

  const handleGenerate = () => {
    setIsLoading(true);
    setError('');
    setPlanText('');
    try {
      const plan = generatePlan(answers).trim();
      setTimeout(() => {
        setPlanText(plan);
        setIsLoading(false);
      }, 400);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
      <div className="max-w-2xl rounded-3xl bg-white/10 px-6 py-8 text-center shadow-2xl backdrop-blur-lg sm:p-10">
        <span className="text-sm uppercase tracking-[0.3em] text-white/60">Personalized Results</span>
        <h2 className="mt-4 text-4xl font-semibold text-white">We got you!</h2>
        <p className="mt-4 text-lg text-white/80">
          That’s definitely something we can help you with.
          <br />
          Your personalized weight-loss plan includes natural steps for:
        </p>
        <ul className="mt-6 space-y-3 text-left text-white">
          <li>✓ Balanced diet structure</li>
          <li>✓ Improved digestion</li>
          <li>✓ Sustained energy and focus</li>
        </ul>
        {error && <p className="mt-6 text-sm text-red-200">{error}</p>}
        {!planText && (
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg font-semibold text-brand transition hover:bg-white/80 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? 'Generating...' : 'Generate My Personalized Plan'}
          </button>
        )}
        {planText && (
          <div className="mt-10 rounded-2xl bg-white/90 px-4 py-6 text-left text-brand shadow-lg sm:px-6">
            <pre className="mt-4 whitespace-pre-wrap text-sm leading-relaxed">{planText}</pre>
            <motion.a
              href="https://www.psychology.com.co/product-page/get-your-full-personalized-plan"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#FF7043] px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-colors duration-200 hover:bg-[#F4511E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4511E]/70 focus-visible:ring-offset-2"
            >
              Explore My Full Personalized Plan
            </motion.a>
          </div>
        )}
      </div>
    </div>
  );
}
