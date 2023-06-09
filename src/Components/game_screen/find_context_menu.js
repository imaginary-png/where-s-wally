import { useEffect } from "react";
import "../../Assets/game_screen/find_context_menu.css";

const FindMenu = ({
  mousePos,
  toFind,
  foundStatus,
  selectCharacter,
  findMenuLostFocus,
}) => {
  const positionMenu = () => {
    // elements will always exist because this component will only be called/rendered from game.js when drawMenu is true
    centerElements("find-popup-root");
    centerElements("target-circle");
    positionCharacterCircles();
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(positionMenu, []);

  const centerElements = (eleId) => {
    const element = document.getElementById(eleId);
    const radius = element.offsetWidth / 2;
    element.style.left = `${mousePos[0] - radius}px`;
    element.style.top = `${mousePos[1] - radius}px`;
  };

  const positionCharacterCircles = () => {
    const images = document.getElementsByClassName("to-find");
    const imgRadius = images[0].offsetWidth / 2;

    const parent = document.getElementById("find-popup-root");
    const parentApo = parent.offsetWidth / 2;

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      switch (i) {
        case 0:
          img.style.top = `${parentApo - imgRadius}px`;
          break;
        case 1:
          img.style.left = `${parentApo - imgRadius}px`;
          break;
        case 2:
          img.style.left = `${2 * (parentApo - imgRadius)}px`;
          img.style.top = `${parentApo - imgRadius}px`;
          break;
        default:
          img.style.left = `${parentApo - imgRadius}px`;
          img.style.top = `${2 * (parentApo - imgRadius)}px`;
          break;
      }
    }
  };

  const loseFocusAfterClick = (e) => {
    findMenuLostFocus(e);
  };

  return (
    <div id="find-popup-root">
      {toFind.map((find) => {
        return (
          <div
            key={find.id}
            className={`to-find found-${foundStatus[find.id]}`}
            onClick={(e) => {
              selectCharacter(find.id);
              loseFocusAfterClick(e);
            }}
          >
            <img src={find.src} alt={find.name} draggable="false"></img>
          </div>
        );
      })}
      <div id="target-circle" onClick={findMenuLostFocus}></div>
    </div>
  );
};

export default FindMenu;
