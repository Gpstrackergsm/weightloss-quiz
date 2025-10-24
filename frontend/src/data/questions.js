export const quizSteps = [
  {
    id: 'q1',
    sectionTitle: 'SECTION 1 — 18 (Intermittent Fasting)',
    sectionSubtitle: 'Goal: Assess eating window & discipline',
    title: 'Q1. How long is your usual eating window during the day?',
    type: 'single',
    options: [
      { value: 'a', label: 'A. 6 hours or less', icon: '⏱️', score: 3 },
      { value: 'b', label: 'B. 8–10 hours', icon: '🕗', score: 2 },
      { value: 'c', label: 'C. 12 hours or more', icon: '🕛', score: 1 }
    ]
  },
  {
    id: 'q2',
    sectionTitle: 'SECTION 1 — 18 (Intermittent Fasting)',
    sectionSubtitle: 'Goal: Assess eating window & discipline',
    title: 'Q2. Do you often snack late at night?',
    type: 'single',
    options: [
      { value: 'a', label: 'A. Never — I stop eating early', icon: '🌙', score: 3 },
      { value: 'b', label: 'B. Sometimes, especially on weekends', icon: '🌜', score: 2 },
      { value: 'c', label: 'C. Yes, most nights', icon: '🦉', score: 1 }
    ]
  },
  {
    id: 'q3',
    sectionTitle: 'SECTION 1 — 18 (Intermittent Fasting)',
    sectionSubtitle: 'Goal: Assess eating window & discipline',
    title: 'Q3. How do you usually break your fast?',
    type: 'single',
    options: [
      { value: 'a', label: 'A. With protein and whole foods', icon: '🍳', score: 3 },
      { value: 'b', label: 'B. With carbs or coffee', icon: '☕', score: 2 },
      { value: 'c', label: 'C. I skip breakfast completely or eat randomly', icon: '🎲', score: 1 }
    ]
  },
  {
    id: 'q4',
    sectionTitle: 'SECTION 2 — 10 (10,000 Steps Daily)',
    sectionSubtitle: 'Goal: Check movement & daily activity',
    title: 'Q4. On average, how active are you during a normal day?',
    type: 'single',
    options: [
      { value: 'a', label: 'A. I walk or move frequently — 8k–10k+ steps', icon: '🚶‍♂️', score: 3 },
      { value: 'b', label: 'B. Moderate activity — 5k–7k steps', icon: '🚶', score: 2 },
      { value: 'c', label: 'C. Mostly sedentary — under 3k steps', icon: '🛋️', score: 1 }
    ]
  },
  {
    id: 'q5',
    sectionTitle: 'SECTION 2 — 10 (10,000 Steps Daily)',
    sectionSubtitle: 'Goal: Check movement & daily activity',
    title: 'Q5. How do you make sure you stay active?',
    type: 'single',
    options: [
      { value: 'a', label: 'A. I track steps or have a daily walking routine', icon: '📱', score: 3 },
      { value: 'b', label: 'B. I move when possible but don’t track', icon: '🧭', score: 2 },
      { value: 'c', label: 'C. I sit most of the day and rarely plan walks', icon: '💺', score: 1 }
    ]
  }
];
