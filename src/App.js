import "./App.css";
import { useState } from "react";
import StartScreen from "./Components/start_screen/start_screen";
import Game from "./Components/game_screen/game";
import EndScreen from "./Components/end_screen/end_screen";

//images
import alien_planet from "./Assets/images/alien planet.png";
import pirate_island from "./Assets/images/pirate island.png";
import medieval from "./Assets/images/medieval.png";
import post_apocalypse from "./Assets/images/post-apocalypse.png";
import prehistoria from "./Assets/images/prehistoria.png";
import underground from "./Assets/images/underground.png";

const App = () => {
  const gameImages = [
    { name: "alien planet.", src: alien_planet, id: 0 },
    { name: "pirate island.", src: pirate_island, id: 1 },
    { name: "medieval.", src: medieval, id: 2 },
    { name: "post apocalypse.", src: post_apocalypse, id: 3 },
    { name: "prehistoria.", src: prehistoria, id: 4 },
    { name: "underground.", src: underground, id: 5 },
  ];

  const [posX, setX] = useState(0);
  const [posY, setY] = useState(0);
  const [gameState, setGameState] = useState("start");
  const [gameImage, setGameImage] = useState(gameImages[0]);

  const renderGameState = () => {
    switch (gameState) {
      case "start":
        return (
          <StartScreen
            images={gameImages}
            selected={gameImage.id}
            setGameState={setGameState}
            setGameImage={setGameImage}
          />
        );
      case "game":
        return <Game image={gameImage.src} setX={setX} setY={setY} />;
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
      <p>{`(${posX}, ${posY})`}</p>
      <button onClick={toggleGameState}>toggle game state</button>
      {renderGameState()}
    </div>
  );
};

export default App;
