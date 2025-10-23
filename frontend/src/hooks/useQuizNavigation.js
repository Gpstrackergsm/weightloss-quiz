import { useMemo, useState } from 'react';
import { quizSteps } from '../data/questions.js';
import { trackEvent } from '../utils/analytics.js';

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
        let action = 'select';

        if (existing.has(value)) {
          existing.delete(value);
          action = 'deselect';
        } else {
          if (value === 'none') {
            existing.clear();
            existing.add('none');
          } else {
            existing.delete('none');
            existing.add(value);
          }
        }

        const selection = Array.from(existing);
        trackEvent('quiz_answer', {
          step_id: stepId,
          question_type: type,
          value,
          action,
          selection: selection.join('|')
        });

        return { ...prev, [stepId]: selection };
      }

      trackEvent('quiz_answer', {
        step_id: stepId,
        question_type: type,
        value,
        action: 'select'
      });

      return { ...prev, [stepId]: value };
    });
  };

  const goNext = () => {
    setCurrentStep((prev) => {
      const next = Math.min(prev + 1, quizSteps.length);

      if (next !== prev) {
        if (prev === -1) {
          trackEvent('quiz_started', { step_id: quizSteps[0]?.id });
        } else if (next === quizSteps.length) {
          trackEvent('quiz_completed', { total_steps: quizSteps.length });
        } else {
          trackEvent('quiz_step_advance', {
            step_id: quizSteps[next]?.id,
            step_index: next + 1,
            total_steps: quizSteps.length
          });
        }
      }

      return next;
    });
  };

  const goBack = () => {
    setCurrentStep((prev) => {
      const next = Math.max(prev - 1, -1);

      if (next !== prev) {
        trackEvent('quiz_step_back', {
          step_id: next >= 0 ? quizSteps[next]?.id : 'landing',
          step_index: next + 1
        });
      }

      return next;
    });
  };

  const resetQuiz = () => {
    setCurrentStep(-1);
    setAnswers({});
    trackEvent('quiz_reset');
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
