const LABELS = {
  symptoms: 'Symptoms you experience',
  diets: 'Diets tried in the last year',
  fermented: 'Fermented food frequency',
  veggies: 'Vegetable frequency',
  goals: 'Your goals'
};

function formatLabel(key) {
  return LABELS[key] || key.replace(/-/g, ' ');
}

function buildRecommendations(answers) {
  const recs = new Set();
  const symptoms = answers.symptoms || [];
  const diets = answers.diets || [];
  const fermented = answers.fermented;
  const veggies = answers.veggies;
  const goals = answers.goals || [];

  if (symptoms.includes('constipation')) {
    recs.add('Increase daily fiber intake with leafy greens, chia seeds, and whole grains, and pair it with steady hydration.');
  }
  if (symptoms.includes('indigestion') || symptoms.includes('bloating')) {
    recs.add('Adopt mindful eating habits: chew slowly, keep portions balanced, and pause between bites to support digestion.');
  }
  if (symptoms.includes('brain-fog')) {
    recs.add('Stabilize blood sugar with protein-rich breakfasts and balanced snacks every 3-4 hours.');
  }
  if (symptoms.includes('diarrhea')) {
    recs.add('Focus on gentle, low-irritant foods and add soluble fiber such as oats and bananas to meals.');
  }
  if (fermented === 'never') {
    recs.add('Introduce probiotic sources like yogurt, kefir, or sauerkraut 3 times a week to build gut diversity.');
  }
  if (veggies === 'rarely' || veggies === 'sometimes') {
    recs.add('Aim for half of your plate to be colorful vegetables at lunch and dinner for micronutrients and fiber.');
  }
  if (goals.includes('lose-weight')) {
    recs.add('Create a gentle 300–500 calorie deficit built on whole foods, lean protein, and slow-digesting carbs.');
  }
  if (goals.includes('overall-health')) {
    recs.add('Anchor each meal around nutrient density: combine protein, healthy fats, and fiber-rich produce.');
  }
  if (goals.includes('gut-health')) {
    recs.add('Layer in prebiotic foods like garlic, onions, and asparagus to nourish beneficial gut bacteria.');
  }
  if (diets.includes('fasting') || diets.includes('keto')) {
    recs.add('Balance structured eating patterns with probiotic foods and mineral-rich broths to support the microbiome.');
  }

  if (recs.size === 0) {
    recs.add('Maintain your current balanced habits while staying consistent with movement, hydration, and sleep.');
  }

  return Array.from(recs);
}

function buildSampleDay(answers) {
  const fermented = answers.fermented;
  const veggies = answers.veggies;

  const breakfast = fermented === 'never'
    ? 'Greek yogurt parfait with berries, chia seeds, and a spoon of sauerkraut on the side to ease into fermented foods.'
    : 'Veggie omelet with spinach and mushrooms, plus a cup of green tea for antioxidants.';

  const lunch = veggies === 'mostly'
    ? 'Large roasted veggie bowl with quinoa, chickpeas, tahini drizzle, and pickled veggies for probiotics.'
    : 'Power salad: mixed greens, grilled salmon or tofu, roasted sweet potatoes, pumpkin seeds, and citrus vinaigrette.';

  const dinner = 'Herb roasted chicken (or tempeh), garlic sautéed greens, and a side of fermented kimchi or pickles.';
  const snacks = 'Mid-morning: apple with almond butter. Afternoon: kombucha or kefir with a handful of walnuts.';
  const movement = '20-30 minutes of brisk walking plus 10 minutes of core activation or mobility work.';

  return { breakfast, lunch, dinner, snacks, movement };
}

function buildMindsetMessage(goals) {
  if ((goals || []).includes('lose-weight')) {
    return 'Progress thrives on consistency. Celebrate the small wins—each balanced choice is a direct vote for the future you want.';
  }
  if ((goals || []).includes('gut-health')) {
    return 'Your gut is adaptable. Feed it variety, breathe deeply before meals, and trust that every mindful bite is building resilience.';
  }
  return 'You are building a sustainable rhythm. Keep stacking nourishing meals, restorative sleep, and joyful movement.';
}

export function generatePlan(answers = {}) {
  const lines = [];
  lines.push('Your Personalized Weight-Loss Strategy');
  lines.push('Crafted just for you based on the answers you shared.');
  lines.push('');

  lines.push('Your Answers:');
  const entries = Object.entries(answers);
  if (entries.length === 0) {
    lines.push('- No answers provided.');
  } else {
    entries.forEach(([key, value]) => {
      const displayValue = Array.isArray(value) ? value.join(', ') : value || 'No selection';
      lines.push(`- ${formatLabel(key)}: ${displayValue}`);
    });
  }
  lines.push('');

  lines.push('Our Recommendations:');
  buildRecommendations(answers).forEach((rec) => {
    lines.push(`- ${rec}`);
  });
  lines.push('');

  const sampleDay = buildSampleDay(answers);
  lines.push('Sample Daily Plan:');
  lines.push(`- Breakfast: ${sampleDay.breakfast}`);
  lines.push(`- Lunch: ${sampleDay.lunch}`);
  lines.push(`- Dinner: ${sampleDay.dinner}`);
  lines.push(`- Snacks: ${sampleDay.snacks}`);
  lines.push(`- Movement: ${sampleDay.movement}`);
  lines.push('');

  lines.push('Mindset & Motivation:');
  lines.push(buildMindsetMessage(answers.goals));

  return lines.join('\n');
}
