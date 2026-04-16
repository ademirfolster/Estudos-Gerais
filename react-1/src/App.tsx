import { useState } from "react";
import { PlayButton } from "./components/playButton";

export default function App() {
  const [exibirCampeao, setExibirCampeao] = useState(false);

  const urlImagemCampeao =
    "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg";

  if (exibirCampeao) {
    return (
      <div
        style={{
          backgroundColor: "gray",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          EAE KRLHO kkkkk
        </h1>
        <img src={urlImagemCampeao} alt="Campeão" style={{ width: "70%" }} />
        <PlayButton label="Voltar" onClick={() => setExibirCampeao(false)} />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        justifyContent: "center",
        gap: "30px",
        height: "100vh",
        maxHeight: "100%",
      }}
    >
      <h1>Missão 1 - Valdemar kkk</h1>
      <PlayButton label="Jogar" onClick={() => setExibirCampeao(true)} />
    </div>
  );
}
