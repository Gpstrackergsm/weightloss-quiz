import { AnimatePresence } from 'framer-motion';
import LandingSection from './components/LandingSection.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import QuestionCard from './components/QuestionCard.jsx';
import ResultSection from './components/ResultSection.jsx';
import { quizSteps } from './data/questions.js';
import { useQuizNavigation } from './hooks/useQuizNavigation.js';

export default function App() {
  const { currentStep, isComplete, progress, answers, updateAnswer, goNext, goBack, resetQuiz } = useQuizNavigation();

  if (currentStep < 0) {
    return <LandingSection onStart={goNext} />;
  }

  if (isComplete) {
    return <ResultSection answers={answers} onRestart={resetQuiz} />;
  }

  const step = quizSteps[currentStep];
  const canProceed = step.type === 'multi' ? (answers[step.id] || []).length > 0 : Boolean(answers[step.id]);

  return (
    <div className="min-h-screen px-4 pt-10 pb-24 md:px-12 md:pb-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <ProgressBar value={progress} />
        <div className="flex flex-1 justify-center">
          <AnimatePresence mode="wait">
            <QuestionCard
              key={step.id}
              step={step}
              answer={answers[step.id]}
              onSelect={(value) => updateAnswer(step.id, value, step.type)}
            />
          </AnimatePresence>
        </div>
        <div className="sticky bottom-6 z-20 flex items-center justify-between gap-4 rounded-full bg-white/10 px-4 py-3 text-white/80 backdrop-blur-sm md:static md:bg-transparent md:p-0 md:backdrop-blur-0 md:shadow-none">
          <button
            type="button"
            onClick={goBack}
            disabled={currentStep === 0}
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium uppercase tracking-[0.2em] transition hover:border-white/40 disabled:opacity-50"
          >
            ← Back
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!canProceed}
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand transition hover:bg-white/80 disabled:opacity-60"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
