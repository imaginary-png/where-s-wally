import "../../Assets/start_screen/image_panel.css";

const ImagePanel = ({ image, selected, setGameImage }) => {
  return (
    <div
      className={`image-panel-main image-selected-${selected}`}
      onClick={() => {
        setGameImage(image);
      }}
    >
      <img
        src={image.src}
        className={`image-container`}
        alt={image.name}
        draggable="false"
      ></img>
      <div>{image.name}</div>
    </div>
  );
};

export default ImagePanel;
