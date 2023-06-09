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
    //console.log(`${e.nativeEvent.offsetX}, ${e.nativeEvent.offsetY}`);
  };

  // check selected character against position
  const selectCharacter = async (charId) => {
    const isFound = await setFoundStatus(charId, clickPos);
    if (isFound) drawTargetCircle();
  };

  // could prob clean up and put dom stuff in another file...
  const drawTargetCircle = () => {
    const ele = document.getElementsByClassName("game-image-div")[0];
    const circle = document.createElement("div");
    const circleContainer = document.createElement("div");

    circleContainer.classList.add("target-stamp-container");
    circle.classList.add("target-stamp-approved", "stamp");

    //need to append / render child first in order to get width
    circle.textContent = "approved";
    circleContainer.appendChild(circle);
    ele.appendChild(circleContainer);

    const widthOffset =
      parseInt(
        window.getComputedStyle(circleContainer).getPropertyValue("width")
      ) / 2;
    const heightOffset =
      parseInt(
        window.getComputedStyle(circleContainer).getPropertyValue("height")
      ) / 2;

    circleContainer.style.left = `${clickPos[0] - widthOffset}px`;
    circleContainer.style.top = `${clickPos[1] - heightOffset}px`;
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

  let isDown = false;
  let isDragging = false;
  let startMousePosX;
  let startMousePosY;

  const startDragging = (e) => {
    isDown = true;
    // initial mouse pos
    startMousePosX = e.nativeEvent.clientX;
    startMousePosY = e.nativeEvent.clientY;
  };

  const scrollOnDrag = (e) => {
    if (!isDown) return;
    isDragging = true;
    e.preventDefault();
    // current mouse pos, if old - new < 0, scroll towards right
    const endMousePosX = e.nativeEvent.clientX;
    const endMousePosY = e.nativeEvent.clientY;

    // const xDiff = startMousePosX - endMousePosX;
    // const yDiff = startMousePosY - endMousePosY;
    // if (xDiff < 5 && xDiff > -5 && yDiff < 5 && yDiff > -5) {
    //   isDragging = false;
    //   return;
    // }

    const walkSpeed = 1.5;
    // walk speed - change in scroll
    const walkX = (startMousePosX - endMousePosX) * walkSpeed;
    const walkY = (startMousePosY - endMousePosY) * walkSpeed;

    window.scroll(window.scrollX + walkX, window.scrollY + walkY);

    startMousePosX = endMousePosX;
    startMousePosY = endMousePosY;
  };

  const dragStopped = (e) => {
    isDown = false;
    isDragging = false;
  };

  return (
    <div
      className="game-root-div"
      onMouseDown={startDragging}
      onMouseLeave={dragStopped}
      onMouseUp={dragStopped}
      onMouseMove={scrollOnDrag}
    >
      <div className="game-image-div">
        <img
          src={image}
          alt="game"
          id="game-image"
          draggable="false"
          onMouseUp={(e) => {
            if (isDragging) return;
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
