import ImagePanel from "./image_panel";
import "../../Assets/start_screen/image_selection.css";

const ImageSelection = ({ images, selected, setGameImage }) => {
  return (
    <div className="image-selection-main">
      {images.map((img) => {
        return (
          <ImagePanel
            image={img}
            selected={img.id === selected}
            setGameImage={setGameImage}
          />
        );
      })}
    </div>
  );
};

export default ImageSelection;
