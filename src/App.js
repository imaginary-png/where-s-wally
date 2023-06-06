import "./App.css";
import { useState } from "react";
import StartScreen from "./pages/start_screen";
import Game from "./pages/game";
import EndScreen from "./pages/end_screen";

import GameStatePanel from "./Components/game_state_panel";
import GameImages from "./lib/game_images";

const App = () => {
  const gameImages = GameImages().getImages();
  const [gameState, setGameState] = useState("start");
  const [gameImage, setGameImage] = useState(gameImages[0]);
  const [found, setFound] = useState([]);

  const setInitialFoundStatus = () => {
    let toFindStatus = [];
    gameImage.toFind.forEach(() => {
      toFindStatus.push(false);
    });
    setFound(toFindStatus);
  };

  const setFoundStatus = (charId) => {
    if (charId < 0 || charId > found.length - 1) return;
    // verify against database
    let newFound = found.slice();
    newFound[charId] = true;
    setFound(newFound);
  };

  const renderGameState = () => {
    switch (gameState) {
      case "start":
        return (
          <StartScreen
            images={gameImages}
            selected={gameImage.id}
            setGameState={setGameState}
            setGameImage={setGameImage}
            setFoundStatus={setInitialFoundStatus}
          />
        );
      case "game":
        return (
          <Game
            image={gameImage.src}
            toFind={gameImage.toFind}
            foundStatus={found}
            setFoundStatus={setFoundStatus}
          />
        );
      case "end":
        return <EndScreen />;
      default:
        return <p>Game State Error!? Please refresh page.</p>;
    }
  };

  //test fn
  const toggleGameState = () => {
    switch (gameState) {
      case "game":
        setGameState("end");
        break;
      case "end":
        setGameState("start");
        break;
      case "start":
      default:
        setGameState("game");
    }
  };

  return (
    <div className="App">
      <div className="app-game-panel">
        <GameStatePanel
          gameState={gameState}
          toFind={gameImage.toFind}
          attribution={gameImage.attribution}
          foundStatus={found}
        />
      </div>
      <button onClick={toggleGameState}>toggle game state</button>
      {renderGameState()}
    </div>
  );
};

export default App;
