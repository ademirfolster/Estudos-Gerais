import { useState } from "react";
import { PlayButton } from "./components/playButton";
import Game from "./game/Game";

export default function App() {
  const [jogar, setJogar] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-950 from-blue-900 via-slate-950 to-black">
      {!jogar && (
        <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 flex flex-col items-center shadow-2xl">
          <PlayButton label="Iniciar Partida" onClick={() => setJogar(true)} />
          <span className="text-slate-400 mt-4 text-xs">
            Versão 1.0 - Powered by{" "}
            <a href="https://github.com/ademirfolster" alt="Ademir Git Hub" className="font-bold">
              Ademir Folster
            </a>{" "}
            &{" "}
            <a href="https://github.com/valdemarnanon" alt="Valdemar Git Hub" className="font-bold">
              Valdemar Nanon
            </a>
          </span>
        </div>
      )}
      {jogar ? <Game jogar={setJogar} /> : undefined}
    </div>
  );
}
