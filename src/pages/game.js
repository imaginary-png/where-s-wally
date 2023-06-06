import { useState } from "react";
import "../Assets/game_screen/game.css";
import FindMenu from "../Components/game_screen/find_context_menu";

const Game = ({ image, toFind, foundStatus, setFoundStatus }) => {
  const [charId, setCharId] = useState(-1);

  const game_clicked = (e) => {
    // set char id in popup modal -- pass setCharId
    const posX = e.nativeEvent.offsetX;
    const posY = e.nativeEvent.offsetY;
    console.log(`${e.nativeEvent.offsetX}, ${e.nativeEvent.offsetY}`);

    check_pos(posX, posY);
  };

  const check_pos = (posX, posY) => {
    if (charId < 0 || charId > toFind.length - 1) return;

    // check_database(image.id, charId, pos);
  };

  // check selected character against position
  const selectCharacter = (charId) => {
    setFoundStatus(charId);
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
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Game;
