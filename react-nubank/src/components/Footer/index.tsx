import logoFooter from "../../../public/logo.png";

export function Footer() {
  const footerSections = [
    {
      title: "Produtos",
      links: [
        { label: "Conta digital", url: "#" },
        { label: "Cartão de crédito", url: "#" },
        { label: "Investimentos", url: "#" },
        { label: "Empréstimo", url: "#" },
      ],
    },
    {
      title: "Nubank",
      links: [
        { label: "Sobre nós", url: "#" },
        { label: "Carreiras", url: "#" },
        { label: "Imprensa", url: "#" },
        { label: "Comunidade", url: "#" },
      ],
    },
    {
      title: "Ajuda",
      links: [
        { label: "Central de ajuda", url: "#" },
        { label: "Blog", url: "#" },
        { label: "Segurança", url: "#" },
        { label: "Contato", url: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-dark pt-15 px-10 pb-7.5">
      <div className="max-w-300 mx-auto mt-0 mb-10 flex gap-15">
        <div className="flex-2">
          <img src={logoFooter} alt="Logo Nubank" className="h-6 mb-4" />
          <p className="text-xs text-gray/80">
            © 2026 Nu Pagamentos S.A. Todos os direitos reservados.
          </p>
        </div>

        {footerSections.map((section) => (
          <div key={section.title} className="flex-1">
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              {section.title}
            </h4>
            <nav className="flex flex-col gap-2">
              {section.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="text-gray text-sm hover:text-purple transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <p className="text-center text-white/50 text-[12px]">
        Desenvolvido por{" "}
        <span className="text-white font-bold cursor-default">
          Ademir Folster Eli
        </span>
      </p>
    </footer>
  );
}
