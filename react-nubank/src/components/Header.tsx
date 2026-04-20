import logoImg from "../../public/logo.png";
import { Button } from "./Button";

export function Header() {
  const linksHeader = [
    { name: "Nubank", url: "#" },
    { name: "Nubank Ultravioleta", url: "#" },
    { name: "Nu empresas", url: "#" },
    { name: "Segurança", url: "#" },
    { name: "Saiba Mais", url: "#" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-md flex items-center justify-between px-10 h-16">
      <img src={logoImg} alt="Logo Nubank" className="h-6.5" />

      <nav className="flex gap-6">
        {linksHeader.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="text-dark text-sm font-semibold cursor-pointer hover:text-purple"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <Button label="Quero ser Nubank" variant="primary" />
    </header>
  );
}
