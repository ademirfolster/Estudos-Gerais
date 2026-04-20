import { Button } from "../Button";

export function CardSection() {
  const benefits = [
    "Zero anuidade, para sempre",
    "Programa de pontos e cashback",
    "Aceito em milhões de estabelecimentos",
    "Bloqueio e desbloqueio pelo app",
  ];

  return (
    <section className="bg-dark px-10 py-25 flex flex-col md:flex-row items-center justify-center gap-20">
      <div className="w-90 h-55 bg-linear-to-br from-purple to-purple-dark rounded-[20px] p-7.5 shadow-[0_20px_40px_rgba(130,10,209,0.3)] transition-transform hover:scale-105 duration-500 cursor-default">
        <div className="w-11.25 h-8.75 bg-linear-to-br from-[#ffd700] to-[#ffa500] rounded-lg mb-7.5" />

        <p className="text-white/70 text-lg tracking-[3px] mb-7.5">
          •••• •••• •••• 1234
        </p>

        <div className="flex justify-between items-end">
          <span className="text-white/70 text-sm uppercase tracking-[2px]">
            Ademir Folster Eli
          </span>
          <strong className="text-white text-2xl">Nu</strong>
        </div>
      </div>

      <div className="max-w-120">
        <h2 className="text-white font-extrabold text-4xl leading-tight mb-4">
          O cartão que você controla
        </h2>

        <p className="text-lg text-white/70 leading-relaxed mb-6">
          Sem anuidade. Sem complicação. Com limite que acompanha você e
          notificações instantâneas a cada compra.
        </p>

        <ul className="mb-6 space-y-3">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="text-white/90 text-lg flex items-center"
            >
              <span className="text-purple font-bold mr-3">✓</span>
              {benefit}
            </li>
          ))}
        </ul>

        <Button label="Pedir meu Cartão" variant="secondary" />
      </div>
    </section>
  );
}
