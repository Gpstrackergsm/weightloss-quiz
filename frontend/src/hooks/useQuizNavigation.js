import { useMemo, useState } from 'react';
import { quizSteps } from '../data/questions.js';

export function useQuizNavigation() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [answers, setAnswers] = useState({});

  const progress = useMemo(() => {
    if (currentStep < 0) return 0;
    const clampedStep = Math.min(currentStep + 1, quizSteps.length);
    return (clampedStep / quizSteps.length) * 100;
  }, [currentStep]);

  const updateAnswer = (stepId, value, type) => {
    setAnswers((prev) => {
      if (type === 'multi') {
        const existing = new Set(prev[stepId] || []);
        if (existing.has(value)) {
          existing.delete(value);
        } else {
          if (value === 'none') {
            return { ...prev, [stepId]: ['none'] };
          }
          existing.delete('none');
          existing.add(value);
        }
        return { ...prev, [stepId]: Array.from(existing) };
      }
      return { ...prev, [stepId]: value };
    });
  };

  const goNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, quizSteps.length));
  };

  const goBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, -1));
  };

  const resetQuiz = () => {
    setCurrentStep(-1);
    setAnswers({});
  };

  return {
    currentStep,
    isComplete: currentStep >= quizSteps.length,
    progress,
    answers,
    updateAnswer,
    goNext,
    goBack,
    resetQuiz
  };
}
