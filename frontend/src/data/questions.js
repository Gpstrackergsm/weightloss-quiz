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
  },
  {
    id: 'q6',
    sectionTitle: 'SECTION 2 — 10 (10,000 Steps Daily)',
    sectionSubtitle: 'Goal: Check movement & daily activity',
    title: 'Q6. Which statement fits you best?',
    type: 'single',
    options: [
      { value: 'a', label: 'A. Exercise gives me energy', icon: '⚡', score: 3 },
      { value: 'b', label: 'B. I try but struggle to stay consistent', icon: '♻️', score: 2 },
      { value: 'c', label: 'C. I feel tired even before moving', icon: '😴', score: 1 }
    ]
  },
  {
    id: 'q7',
    sectionTitle: 'SECTION 3 — 8 (Quality Sleep)',
    sectionSubtitle: 'Goal: Evaluate sleep habits',
    title: 'Q7. How many hours of sleep do you get on average?',
    type: 'single',
    options: [
      { value: 'a', label: 'A. 8+ hours, good quality sleep', icon: '🛌', score: 3 },
      { value: 'b', label: 'B. 6–7 hours, okay quality', icon: '⏰', score: 2 },
      { value: 'c', label: 'C. Less than 6 hours or poor quality', icon: '😵‍💫', score: 1 }
    ]
  },
  {
    id: 'q8',
    sectionTitle: 'SECTION 3 — 8 (Quality Sleep)',
    sectionSubtitle: 'Goal: Evaluate sleep habits',
    title: 'Q8. What best describes your bedtime routine?',
    type: 'single',
    options: [
      { value: 'a', label: 'A. Consistent bedtime, no screens before bed', icon: '📵', score: 3 },
      { value: 'b', label: 'B. I try to sleep early but get distracted', icon: '📺', score: 2 },
      { value: 'c', label: 'C. I scroll or watch TV until I fall asleep', icon: '📱', score: 1 }
    ]
  },
  {
    id: 'q9',
    sectionTitle: 'SECTION 3 — 8 (Quality Sleep)',
    sectionSubtitle: 'Goal: Evaluate sleep habits',
    title: 'Q9. Do you wake up feeling rested and focused?',
    type: 'single',
    options: [
      { value: 'a', label: 'A. Almost always', icon: '🌞', score: 3 },
      { value: 'b', label: 'B. Sometimes', icon: '🌤️', score: 2 },
      { value: 'c', label: 'C. Rarely', icon: '🌧️', score: 1 }
    ]
  },
  {
    id: 'q10',
    sectionTitle: 'SECTION 4 — 4 (Hydration)',
    sectionSubtitle: 'Goal: Measure hydration & toxin elimination',
    title: 'Q10. How much water or herbal tea do you drink daily?',
    type: 'single',
    options: [
      { value: 'a', label: 'A. 4+ liters', icon: '💧', score: 3 },
      { value: 'b', label: 'B. Around 2–3 liters', icon: '🥤', score: 2 },
      { value: 'c', label: 'C. Less than 2 liters', icon: '🌵', score: 1 }
    ]
  },
  {
    id: 'q11',
    sectionTitle: 'SECTION 4 — 4 (Hydration)',
    sectionSubtitle: 'Goal: Measure hydration & toxin elimination',
    title: 'Q11. How do you remind yourself to stay hydrated?',
    type: 'single',
    options: [
      { value: 'a', label: 'A. I track or carry a bottle everywhere', icon: '🧊', score: 3 },
      { value: 'b', label: 'B. I drink when thirsty', icon: '🚰', score: 2 },
      { value: 'c', label: 'C. I forget often', icon: '💤', score: 1 }
    ]
  },
  {
    id: 'q12',
    sectionTitle: 'SECTION 4 — 4 (Hydration)',
    sectionSubtitle: 'Goal: Measure hydration & toxin elimination',
    title: 'Q12. How clear is your urine most of the day?',
    type: 'single',
    options: [
      { value: 'a', label: 'A. Clear / light yellow', icon: '✨', score: 3 },
      { value: 'b', label: 'B. Medium yellow', icon: '🌼', score: 2 },
      { value: 'c', label: 'C. Dark yellow or cloudy', icon: '🌑', score: 1 }
    ]
  },
  {
    id: 'q13',
    sectionTitle: 'SECTION 5 — 1 (Protein Intake)',
    sectionSubtitle: 'Goal: Assess nutrition and muscle maintenance',
    title: 'Q13. How often do you include protein in meals?',
    type: 'single',
    options: [
      { value: 'a', label: 'A. Every meal', icon: '🥗', score: 3 },
      { value: 'b', label: 'B. 1–2 meals per day', icon: '🍽️', score: 2 },
      { value: 'c', label: 'C. Rarely or inconsistently', icon: '🍩', score: 1 }
    ]
  },
  {
    id: 'q14',
    sectionTitle: 'SECTION 5 — 1 (Protein Intake)',
    sectionSubtitle: 'Goal: Assess nutrition and muscle maintenance',
    title: 'Q14. Do you know how much protein you need daily (1g per kg body weight)?',
    type: 'single',
    options: [
      { value: 'a', label: 'A. Yes, and I track it', icon: '📊', score: 3 },
      { value: 'b', label: 'B. I roughly estimate', icon: '📝', score: 2 },
      { value: 'c', label: 'C. No idea / never tracked', icon: '❓', score: 1 }
    ]
  },
  {
    id: 'q15',
    sectionTitle: 'SECTION 5 — 1 (Protein Intake)',
    sectionSubtitle: 'Goal: Assess nutrition and muscle maintenance',
    title: 'Q15. What are your main protein sources?',
    type: 'single',
    options: [
      { value: 'a', label: 'A. Lean meat, eggs, tofu, legumes', icon: '🍗', score: 3 },
      { value: 'b', label: 'B. Occasional meats or shakes', icon: '🥤', score: 2 },
      { value: 'c', label: 'C. Mostly carbs or processed food', icon: '🍟', score: 1 }
    ]
  }
];
