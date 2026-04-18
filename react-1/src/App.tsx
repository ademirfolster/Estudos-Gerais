import { useState } from "react";
import { PlayButton } from "./components/playButton";
import Game from "./game/Game";

export default function App() {
  const [jogar, setJogar] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen max-h-full">
      {!jogar ? (
        <PlayButton label="Jogar" onClick={() => setJogar(!jogar)} />
      ) : null}
      {jogar ? <Game jogar={setJogar} /> : undefined}
    </div>
  );
}
