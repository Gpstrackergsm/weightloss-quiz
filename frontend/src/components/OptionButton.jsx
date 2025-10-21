import clsx from 'clsx';

export default function OptionButton({ option, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'w-full flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-left text-white transition hover:bg-white/20',
        selected && 'border-white bg-white/20 shadow-lg'
      )}
    >
      <span className="text-2xl">{option.icon}</span>
      <span className="font-medium">{option.label}</span>
    </button>
  );
}
