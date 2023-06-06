import "../Assets/game_state_panel.css";

const GameStatePanel = ({ gameState, toFind, attribution, foundStatus }) => {
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
                <p
                  className={`game-panel-item-${foundStatus[find.id]}`}
                >{`${find.name} - ${find.src} - ${find.id}`}</p>
              );
            })}
            <p>{attribution}</p>
            <p>{`${foundStatus}`}</p>
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
