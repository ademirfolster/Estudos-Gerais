interface playButtonProps {
  label: string;
  onClick: () => void;
}

export function PlayButton({ label, onClick }: playButtonProps) {
  return (
    <button
      onClick={onClick}
      className="py-4 px-8 text-xl bg-yellow-600 text-black border-2 border-black rounded-xl cursor-pointer font-bold uppercase"
    >
      {label}
    </button>
  );
}
