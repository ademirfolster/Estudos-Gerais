import { useState } from "react";
import Game from "./game/Game";
import { InicialPage } from "./components/InicialPage";

export default function App() {
  const [jogar, setJogar] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-linear-to-b from-blue-950 via-slate-950 to-black p-4">
      {jogar ? (
        <Game jogar={setJogar} />
      ) : (
        <InicialPage onStart={() => setJogar(true)} />
      )}
    </div>
  );
}
