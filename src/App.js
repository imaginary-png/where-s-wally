import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [posX, setX] = useState(0);
  const [posY, setY] = useState(0);

  const updatePos = () => {
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (x !== posX) setX(x);
      if (y !== posY) setY(y);
    });
  };

  // run just once on component mount

  useEffect(() => {
    updatePos();
    console.log("window event subbed ");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <p>{`(${posX}, ${posY})`}</p>
    </div>
  );
};

export default App;
