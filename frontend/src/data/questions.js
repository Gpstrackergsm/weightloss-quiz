export const quizSteps = [
  {
    id: 'symptoms',
    title: 'Do you experience any of the following symptoms?',
    type: 'multi',
    options: [
      { value: 'indigestion', label: 'Indigestion / nausea', icon: '🌿' },
      { value: 'constipation', label: 'Constipation', icon: '💧' },
      { value: 'brain-fog', label: 'Brain fog / fatigue', icon: '🧠' },
      { value: 'bloating', label: 'Gas / bloating', icon: '💨' },
      { value: 'diarrhea', label: 'Diarrhea', icon: '⚡' },
      { value: 'none', label: 'None of the above', icon: '✨' }
    ]
  },
  {
    id: 'diets',
    title: 'What diets have you tried in the last year?',
    type: 'multi',
    options: [
      { value: 'keto', label: 'Keto', icon: '🥑' },
      { value: 'fasting', label: 'Fasting', icon: '⏱️' },
      { value: 'paleo', label: 'Paleo', icon: '🍖' },
      { value: 'mediterranean', label: 'Mediterranean', icon: '🌊' },
      { value: 'dash', label: 'DASH diet', icon: '⚖️' },
      { value: 'plant-based', label: 'Vegetarian / Vegan diet', icon: '🥕' }
    ]
  },
  {
    id: 'fermented',
    title: 'How often do you eat fermented foods?',
    type: 'single',
    options: [
      { value: 'never', label: 'Never', icon: '🚫' },
      { value: 'sometimes', label: 'Sometimes', icon: '🌱' },
      { value: 'often', label: 'Often', icon: '🔥' },
      { value: 'daily', label: 'Every day', icon: '🌞' }
    ]
  },
  {
    id: 'veggies',
    title: 'How often do you eat veggies?',
    type: 'single',
    options: [
      { value: 'rarely', label: 'I don’t really eat veggies', icon: '🍟' },
      { value: 'sometimes', label: 'I eat veggies from time to time', icon: '🥗' },
      { value: 'daily', label: 'I eat veggies every day', icon: '🥦' },
      { value: 'mostly', label: 'I eat mostly veggies', icon: '🥬' }
    ]
  },
  {
    id: 'goals',
    title: 'What are your goals?',
    type: 'multi',
    options: [
      { value: 'lose-weight', label: 'Losing weight', icon: '⚖️' },
      { value: 'overall-health', label: 'Improving my overall health', icon: '💪' },
      { value: 'gut-health', label: 'Improving my gut health', icon: '🦠' }
    ]
  }
];
