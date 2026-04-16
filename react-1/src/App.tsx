import { useState } from "react";
import { PlayButton } from "./components/playButton";
import  Game  from "./game/Game";


export default function App() {
  const [jogar, setJogar] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        height: "100vh",
        maxHeight: "100%",
      }}
    >
      {!jogar ? <PlayButton label="Jogar" onClick={() => setJogar(!jogar)} /> : null}
      {jogar ? <Game jogar={setJogar} /> : undefined}
    </div>
  );
}
