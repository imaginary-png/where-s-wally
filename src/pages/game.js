import { useState } from "react";
import "../Assets/game_screen/game.css";
import FindMenu from "../Components/game_screen/find_context_menu";

const Game = ({ image, toFind, foundStatus }) => {
  const [charId, setCharId] = useState(-1);

  const game_clicked = (e) => {
    // set char id in popup modal -- pass setCharId
    const posX = e.nativeEvent.offsetX;
    const posY = e.nativeEvent.offsetY;
    console.log(`${e.nativeEvent.offsetX}, ${e.nativeEvent.offsetY}`);

    // render modal popup below,
    // toggle visibility and position here
    // set x and y pos above,
    // verify against database for toFind id, pos

    // work on modal window, render down below
    // use tofind (image, id) to populate modal window options
    // on click use position - id against database
    check_pos(posX, posY);
  };

  const check_pos = (posX, posY) => {
    if (charId < 0 || charId > toFind.length - 1) return;

    // check_database(image.id, charId, pos);
  };

  // context menu test
  const [drawMenu, setDrawMenu] = useState(false);
  const [mousePos, setMousePos] = useState([0, 0]);

  const toggleDrawMenu = (e) => {
    setDrawMenu(!drawMenu);
    setMousePos([e.nativeEvent.clientX, e.nativeEvent.clientY]);
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
        />
        {drawMenu ? <FindMenu mousePos={mousePos} toFind={toFind} /> : ""}
      </div>
    </div>
  );
};

export default Game;
