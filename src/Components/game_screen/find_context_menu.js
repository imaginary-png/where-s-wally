import { useEffect } from "react";
import "../../Assets/game_screen/find_context_menu.css";

const FindMenu = ({ mousePos, toFind }) => {
  const positionMenu = () => {
    // elements will always exist because this component will only be called/rendered from game.js when drawMenu is true

    centerElements("find-popup-root");
    centerElements("target-circle");
  };

  const centerElements = (eleId) => {
    const element = document.getElementById(eleId);
    const radius = element.offsetWidth / 2;
    element.style.left = `${mousePos[0] - radius}px`;
    element.style.top = `${mousePos[1] - radius}px`;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(positionMenu, []);

  return (
    <div id="find-popup-root">
      {toFind.map((find) => {
        return <div className="to-find">find.name</div>;
      })}
      <div id="target-circle">efews</div>
    </div>
  );
};

export default FindMenu;
