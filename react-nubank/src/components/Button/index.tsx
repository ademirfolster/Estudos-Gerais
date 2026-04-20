interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "cta";
  onClick?: () => void;
}

export function Button({ label, variant = "primary", onClick }: ButtonProps) {
  const styles = {
    primary: "bg-purple-dark text-white rounded-4xl hover:bg-purple",
    secondary: "bg-purple text-white rounded-md hover:bg-purple-dark",
    cta: "bg-white text-purple rounded-4xl hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`
      py-2.5 px-5 font-bold text-sm transition-all duration-300 active:scale-95 cursor-pointer ${styles[variant]}`}
    >
      {label}
    </button>
  );
}
