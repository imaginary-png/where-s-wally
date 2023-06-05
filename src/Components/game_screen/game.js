import { useEffect } from "react";
import "../../Assets/game_screen/game.css";

const Game = ({ image, setX, setY }) => {
  // run just once on component mount

  const updatePos = () => {
    function update(e) {
      // offset X/Y is the pos over the element itself
      const x = e.offsetX;
      const y = e.offsetY;
      setX(x);
      setY(y);
    }

    const gameElement = document.getElementById("game-image");
    gameElement.addEventListener("mousemove", update);

    return () => {
      gameElement.removeEventListener("mousemove", update);
    };
  };

  useEffect(() => {
    const cleanup = updatePos();
    console.log("window event subbed ");
    return () => {
      cleanup();
      console.log("cleaned up");
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="game-root-div">
      <div className="game-image-div">
        <img src={image} alt="game" id="game-image"></img>
      </div>
    </div>
  );
};

export default Game;
