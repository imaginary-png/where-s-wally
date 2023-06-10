import "../Assets/game_state_panel.css";

const GameStatePanel = ({ gameState, toFind, attribution, foundStatus }) => {
  const renderGamePanelState = () => {
    switch (gameState) {
      case "start":
        return (
          <div>
            <p>Pick a world to explore!</p>
            <a
              href="https://github.com/imaginary-png/where-s-wally"
              target="_blank"
              rel="noreferrer"
              id="github"
            >
              code.
            </a>
          </div>
        );
      case "game":
        return (
          <div className="game-panel-container">
            <p>Find the following!</p>
            {toFind.map((find) => {
              return (
                <div
                  className={`game-panel-item-${foundStatus[find.id]}`}
                  key={find.id}
                >
                  <img src={find.src} alt={find.name} draggable="false"></img>
                  <div className="game-panel-image-name">{find.name}</div>
                </div>
              );
            })}
            <a href={attribution} target="_blank" rel="noreferrer">
              img source
            </a>
            <div class="how-to-play">
              <div>?</div>
            </div>
            <div class="how-to-play-text">
              <p>
                Navigate the world by click and dragging, or using the arrow
                keys.
              </p>
              <p>
                Click on a spot to open the find menu, and select the character
                you found
              </p>
              <p>Find them all to win!</p>
            </div>
          </div>
        );
      case "end":
        return (
          <div>
            <p>Finished!</p>
            <p id="submit-score-name-error">please enter a name.</p>
          </div>
        );
      default:
        return <p>Game State Error!? Please refresh page.</p>;
    }
  };

  return <div className="game-panel-root">{renderGamePanelState()}</div>;
};

export default GameStatePanel;
