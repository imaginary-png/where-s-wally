import "../Assets/start_screen/start_screen.css";
import ImageSelection from "../Components/start_screen/image_selection";

const StartScreen = ({
  images,
  selected,
  setGameState,
  setGameImage,
  setFoundStatus,
  setStartTime,
}) => {
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
          setStartTime();
          setFoundStatus();
        }}
      >
        play.
      </button>
    </div>
  );
};

export default StartScreen;
