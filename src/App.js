import "./App.css";
import { useState } from "react";
import StartScreen from "./Components/start_screen/start_screen";
import Game from "./Components/game_screen/game";
import EndScreen from "./Components/end_screen/end_screen";

import GameStatePanel from "./Components/game_state_panel";
import GameImages from "./lib/game_images";

const App = () => {
  const gameImages = GameImages().getImages();
  const [gameState, setGameState] = useState("start");
  const [gameImage, setGameImage] = useState(gameImages[0]);
  const [found, setFound] = useState([false, false, false]);

  const setFoundStatus = () => {
    let toFindStatus = [];
    gameImage.toFind.forEach(() => {
      toFindStatus.push(false);
    });
    setFound(toFindStatus);
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
            setFoundStatus={setFoundStatus}
          />
        );
      case "game":
        return (
          <Game
            image={gameImage.src}
            toFind={gameImage.toFind}
            foundStatus={found}
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
