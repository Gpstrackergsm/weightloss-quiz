import express from 'express';
import cors from 'cors';
import PDFDocument from 'pdfkit';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const BRAND_COLOR = '#4F6B67';

function formatLabel(key) {
  const labels = {
    symptoms: 'Symptoms you experience',
    diets: 'Diets tried in the last year',
    fermented: 'Fermented food frequency',
    veggies: 'Vegetable frequency',
    goals: 'Your goals'
  };
  return labels[key] || key.replace(/-/g, ' ');
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

function writeSectionTitle(doc, text) {
  doc.moveDown(1.5);
  doc.fillColor(BRAND_COLOR).fontSize(18).text(text, { underline: false });
  doc.moveDown(0.3);
  doc.fillColor('#444444').fontSize(12);
  doc.moveTo(doc.x, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).strokeColor(BRAND_COLOR).lineWidth(1).stroke();
  doc.moveDown(0.6);
}

app.post('/api/generate-report', (req, res) => {
  try {
    const { answers = {} } = req.body || {};
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="personalized-weight-loss-plan.pdf"');

    const doc = new PDFDocument({ margin: 50 });
    doc.pipe(res);

    doc.fillColor(BRAND_COLOR).fontSize(24).text('Your Personalized Weight-Loss Strategy', { align: 'center' });
    doc.moveDown();
    doc.fillColor('#555555').fontSize(12).text('Crafted just for you based on the answers you shared.');

    writeSectionTitle(doc, 'Your Answers');
    Object.entries(answers).forEach(([key, value]) => {
      const displayValue = Array.isArray(value) ? value.join(', ') : value || 'No selection';
      doc
        .fillColor('#222222')
        .fontSize(12)
        .text(`${formatLabel(key)}:`, { continued: true })
        .fillColor('#555555')
        .text(` ${displayValue}`);
    });

    writeSectionTitle(doc, 'Our Recommendations');
    buildRecommendations(answers).forEach((rec) => {
      const bulletX = doc.x;
      const bulletY = doc.y + 6;
      doc.circle(bulletX, bulletY, 2).fillColor(BRAND_COLOR).fill();
      doc
        .fillColor('#333333')
        .text(`   ${rec}`, {
          paragraphGap: 6
        });
    });

    const sampleDay = buildSampleDay(answers);
    writeSectionTitle(doc, 'Sample Daily Plan');
    doc.fillColor('#333333').fontSize(12);
    doc.text(`Breakfast: ${sampleDay.breakfast}`, { paragraphGap: 6 });
    doc.text(`Lunch: ${sampleDay.lunch}`, { paragraphGap: 6 });
    doc.text(`Dinner: ${sampleDay.dinner}`, { paragraphGap: 6 });
    doc.text(`Snacks: ${sampleDay.snacks}`, { paragraphGap: 6 });
    doc.text(`Movement: ${sampleDay.movement}`, { paragraphGap: 10 });

    writeSectionTitle(doc, 'Mindset & Motivation');
    doc.fillColor('#333333').fontSize(12).text(buildMindsetMessage(answers.goals));

    doc.moveDown(2);
    doc.fillColor('#888888').fontSize(10).text('Generated by Your Weight Loss Quiz — Personalized Wellness Plans', {
      align: 'center'
    });

    doc.end();
  } catch (error) {
    console.error('Failed to generate PDF', error);
    if (!res.headersSent) {
      res.status(500).json({ message: 'Failed to generate PDF' });
    }
  }
});

app.get('/', (_, res) => {
  res.json({ status: 'Weight loss quiz API is running' });
});

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
