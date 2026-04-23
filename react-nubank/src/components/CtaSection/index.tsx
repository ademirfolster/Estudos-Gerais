import { Button } from "../Button";

export function CtaSection() {
  return (
    <section className="py-25 px-10 text-center bg-linear-[135deg] bg-purple-dark to-purple">
      <h2 className="text-white mb-6 text-4xl font-extrabold">
        Pronto para simplificar sua vida financeira?
      </h2>
      <p className="text-white/80 text-[18px] mb-8">
        Abra sua conta em minutos. Sem filas, sem papelada, sem burocracia.
      </p>

      <Button label="Abrir uma conta gratuita" variant="cta" />
    </section>
  );
}
