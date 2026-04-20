export function Services() {
  const services = [
    { name: "💳 Conta do Nubank", url: "#" },
    { name: "💜 Cartão de crédito", url: "#" },
    { name: "🔒 Seguro Nubank", url: "#" },
    { name: "📱 Nu Celular", url: "#" },
    { name: "🛍️ Shopping", url: "#" },
    { name: "📈 Investimentos", url: "#" },
    { name: "💰 Empréstimo", url: "#" },
  ];

  return (
    <section className="py-14.5 px-10 max-w-300 mx-auto flex justify-center gap-7.5">
      {services.map((service) => (
        <a
          key={service.name}
          href={service.url}
          className="flex flex-col gap-2 items-center text-dark text-sm font-bold hover:text-purple"
        >
          {service.name}
        </a>
      ))}
    </section>
  );
}
