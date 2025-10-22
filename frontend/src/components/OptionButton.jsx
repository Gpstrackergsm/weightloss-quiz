import clsx from 'clsx';

export default function OptionButton({ option, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'w-full flex items-center gap-4 rounded-xl border px-4 py-3 text-left text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
        selected
          ? 'border-transparent bg-brand hover:bg-brand/90 shadow-lg'
          : 'border-white/15 bg-white/10 hover:bg-white/20'
      )}
      aria-pressed={selected}
    >
      {option.icon && (
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl">{option.icon}</span>
      )}
      <div className="flex flex-col">
        <span className="font-semibold">{option.label}</span>
        {option.description && <span className="text-sm text-white/70">{option.description}</span>}
      </div>
    </button>
  );
}
