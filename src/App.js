import "./App.css";
import { useEffect, useState } from "react";
import StartScreen from "./pages/start_screen";
import Game from "./pages/game_screen";
import EndScreen from "./pages/end_screen";

import GameStatePanel from "./Components/game_state_panel";
import GameImages from "./lib/game_images";
import database from "./firebase/firebase-firestore";

const App = () => {
  const db = database();
  const gameImages = GameImages().getImages();

  const [gameState, setGameState] = useState("start");
  const [gameImage, setGameImage] = useState(gameImages[0]);
  const [found, setFound] = useState([false]);
  const [startTime, setStartTime] = useState(0);

  const setInitialFoundStatus = () => {
    let toFindStatus = [];
    gameImage.toFind.forEach(() => {
      toFindStatus.push(false);
    });
    setFound(toFindStatus);
  };

  const setFoundStatus = async (charId, clickPos) => {
    if (charId < 0 || charId > found.length - 1) return;
    const valid = await db.validatePosition(gameImage.id, charId, clickPos);
    if (!valid) {
      shakeGamePanel();
      return;
    }

    let newFound = found.slice();
    newFound[charId] = true;
    setFound(newFound);
  };

  const shakeGamePanel = () => {
    const elements = document.getElementsByClassName("game-panel-item-false");

    for (let i in elements) {
      elements.item(i).classList.add("shake");
      setTimeout(() => elements.item(i).classList.remove("shake"), 500);
    }
  };

  const checkGameWon = () => {
    // check each found status, if any are false - return
    for (let i = 0; i < found.length; i++) {
      if (!found[i]) return;
    }

    setGameState("end");
  };

  useEffect(checkGameWon, [found]);

  const updateGameState = (state) => {
    setGameState(state);
  };

  const updateGameImage = (image) => {
    setGameImage(image);
  };

  const updateStartTime = () => {
    setStartTime(Date.now());
  };

  const renderGameState = () => {
    switch (gameState) {
      case "start":
        return (
          <StartScreen
            images={gameImages}
            selected={gameImage.id}
            setGameState={updateGameState}
            setGameImage={updateGameImage}
            setFoundStatus={setInitialFoundStatus}
            setStartTime={updateStartTime}
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
        return (
          <EndScreen
            startTime={startTime}
            setGameState={updateGameState}
            imageId={gameImage.id}
          />
        );
      default:
        return <p>Game State Error!? Please refresh page.</p>;
    }
  };

  //test fn
  const toggleGameState = () => {
    switch (gameState) {
      case "game":
        updateGameState("end");
        break;
      case "end":
        updateGameState("start");
        break;
      case "start":
      default:
        updateGameState("game");
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
