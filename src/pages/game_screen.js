import { useState } from "react";
import "../Assets/game_screen/game_screen.css";
import FindMenu from "../Components/game_screen/find_context_menu";

const Game = ({ image, toFind, foundStatus, setFoundStatus }) => {
  const [clickPos, setClickPos] = useState([0, 0]);

  // sets click position on the game image
  const game_clicked = (e) => {
    const posX = e.nativeEvent.offsetX;
    const posY = e.nativeEvent.offsetY;
    setClickPos([posX, posY]);
    console.log(`${e.nativeEvent.offsetX}, ${e.nativeEvent.offsetY}`);
  };

  // check selected character against position
  const selectCharacter = (charId) => {
    setFoundStatus(charId, clickPos);
  };

  // context menu
  const [drawMenu, setDrawMenu] = useState(false);
  const [mousePos, setMousePos] = useState([0, 0]);

  const toggleDrawMenu = (e) => {
    setDrawMenu(!drawMenu);
    setMousePos([e.nativeEvent.clientX, e.nativeEvent.clientY]);
  };

  const findMenuLostFocus = (e) => {
    if (drawMenu) toggleDrawMenu(e);
  };

  return (
    <div className="game-root-div">
      <div className="game-image-div">
        <img
          src={image}
          alt="game"
          id="game-image"
          draggable="false"
          onClick={(e) => {
            game_clicked(e);
            toggleDrawMenu(e);
          }}
          onMouseOver={findMenuLostFocus}
        />
        {drawMenu ? (
          <FindMenu
            mousePos={mousePos}
            toFind={toFind}
            foundStatus={foundStatus}
            selectCharacter={selectCharacter}
            findMenuLostFocus={findMenuLostFocus}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Game;
