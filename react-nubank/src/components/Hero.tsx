import fundoImg from "../../public/fundo.png";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden rounded-b-[40px] px-10 pb-20 -mt-16">
      <img
        src={fundoImg}
        alt="Arena Nubank"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
      />

      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/10 to-black/60" />

      <div className="mx-auto flex w-full max-w-300 flex-col items-end justify-between gap-12 md:flex-row">
        <div className="max-w-150">
          <h1 className="mb-8 text-[44px] font-extrabold leading-[1.1] text-white">
            Vote no novo nome da arena e veja o seu próprio nome aparecer lá
          </h1>
          <Button label="Votar Agora" variant="primary" />
        </div>

        <div className="w-full max-w-100 rounded-2xl bg-white p-8 shadow-2xl">
          <h3 className="mb-6 text-xl font-bold text-dark">
            Peça seu Cartão de Crédito e abra uma Conta Nubank
          </h3>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray">Digite seu CPF</label>
            <input
              type="text"
              placeholder="000.000.000-00"
              className="w-full rounded-full bg-gray-100 px-4 py-3 outline-hidden focus:ring-2 focus:ring-purple/50"
            />
            <Button label="Confirmar" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}
