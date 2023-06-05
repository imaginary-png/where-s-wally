import "../../Assets/start_screen/start_screen.css";
import ImageSelection from "./image_selection";

const StartScreen = ({ images, selected, setGameState, setGameImage }) => {
  return (
    <div className="start-root-div">
      <ImageSelection
        images={images}
        selected={selected}
        setGameImage={setGameImage}
      />
      <button
        onClick={() => {
          setGameState("game");
        }}
      >
        play.
      </button>
    </div>
  );
};

export default StartScreen;
