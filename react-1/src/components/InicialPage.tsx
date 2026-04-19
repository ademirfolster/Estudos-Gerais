import { PlayButton } from "./playButton";
import packageInfo from "../../package.json";

interface InicialPageProps {
  onStart: () => void;
}

export function InicialPage({ onStart }: InicialPageProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 flex flex-col items-center shadow-2xl">
      <h1 className="text-6xl font-black italic text-transparent bg-clip-text bg-linear-to-b from-yellow-200 to-yellow-600 uppercase drop-shadow-md">
        LoL Guessr
      </h1>
      <p className="text-blue-300 tracking-[0.2em] font-normal uppercase text-sm mb-8">
        Adivinhe o Campeão
      </p>

      <PlayButton label="Iniciar Partida" onClick={onStart} />

      <span className="text-slate-400 mt-4 text-xs">
        Versão {packageInfo.version} - Powered by{" "}
        <a href="https://github.com/ademirfolster" className="font-bold">
          Ademir Folster
        </a>{" "}
        &{" "}
        <a href="https://github.com/valdemarnanon" className="font-bold">
          Valdemar Nanon
        </a>
      </span>
    </div>
  );
}
