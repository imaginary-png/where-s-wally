import { useEffect } from "react";
import "../Assets/game_state_panel.css";

const GameStatePanel = ({ gameState, toFind, attribution, foundStatus }) => {
  useEffect(() => console.log("found"), [foundStatus]);

  const renderGamePanelState = () => {
    switch (gameState) {
      case "start":
        return <p>Pick a world to explore!</p>;
      case "game":
        return (
          <div className="game-panel-container">
            <p>Find the following!</p>
            {toFind.map((find) => {
              return (
                <div className={`game-panel-item-${foundStatus[find.id]}`}>
                  <img src={find.src} alt={find.name}></img>
                </div>
              );
            })}
            <a href={attribution}>img source</a>
          </div>
        );
      case "end":
        return <p>Finish!</p>;
      default:
        return <p>Game State Error!? Please refresh page.</p>;
    }
  };

  return <div className="game-panel-root">{renderGamePanelState()}</div>;
};

export default GameStatePanel;
