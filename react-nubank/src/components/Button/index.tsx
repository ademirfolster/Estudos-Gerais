interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "cta";
  onClick?: () => void;
}
export function Button({ label, variant = "primary", onClick }: ButtonProps) {}
