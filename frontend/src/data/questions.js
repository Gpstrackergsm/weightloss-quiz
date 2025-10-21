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
    id: 'activity',
    title: 'What best describes your weekly activity level?',
    type: 'single',
    options: [
      { value: 'sedentary', label: 'Mostly sitting', icon: '🪑' },
      { value: 'light', label: 'Light movement 1-2x a week', icon: '🚶' },
      { value: 'moderate', label: 'Workouts 3-4x a week', icon: '🏋️' },
      { value: 'active', label: 'On my feet or training daily', icon: '⚡' }
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
    id: 'sleep',
    title: 'How would you describe your sleep quality?',
    type: 'single',
    options: [
      { value: 'restless', label: 'Restless & interrupted', icon: '🌙' },
      { value: 'okay', label: 'Okay, but not great', icon: '😴' },
      { value: 'solid', label: 'Pretty solid most nights', icon: '💤' },
      { value: 'excellent', label: 'Excellent, I wake up energized', icon: '🌅' }
    ]
  },
  {
    id: 'hydration',
    title: 'How many cups of water do you drink in a day?',
    type: 'single',
    options: [
      { value: 'under-4', label: 'Under 4 cups', icon: '🥤' },
      { value: 'four-to-six', label: '4-6 cups', icon: '💧' },
      { value: 'seven-to-nine', label: '7-9 cups', icon: '🚰' },
      { value: 'ten-plus', label: '10+ cups', icon: '🏞️' }
    ]
  },
  {
    id: 'cravings',
    title: 'What cravings tend to derail you?',
    type: 'multi',
    options: [
      { value: 'sugar', label: 'Sugary treats', icon: '🍰' },
      { value: 'salty', label: 'Salty snacks', icon: '🥨' },
      { value: 'late-night', label: 'Late-night munchies', icon: '🌜' },
      { value: 'comfort', label: 'Comfort foods / takeout', icon: '🍕' },
      { value: 'none', label: 'Cravings rarely throw me off', icon: '✨' }
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
