import { motion } from 'framer-motion';
import OptionButton from './OptionButton.jsx';

const cardVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

export default function QuestionCard({ step, answer, onSelect }) {
  return (
    <motion.div
      key={step.id}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6 rounded-3xl bg-white/10 p-8 backdrop-blur-lg shadow-xl"
    >
      <div>
        <span className="text-sm uppercase tracking-[0.3em] text-white/60">Question</span>
        <h2 className="mt-2 text-2xl font-semibold text-white">{step.title}</h2>
      </div>
      <div className="flex flex-col gap-3">
        {step.options.map((option) => {
          const isSelected = step.type === 'multi' ? (answer || []).includes(option.value) : answer === option.value;
          return (
            <OptionButton
              key={option.value}
              option={option}
              selected={isSelected}
              onClick={() => onSelect(option.value)}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
