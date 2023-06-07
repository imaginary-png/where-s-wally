import { useEffect, useState } from "react";
import "../Assets/end_screen/end_screen.css";
import database from "../firebase/firebase-firestore";

const EndScreen = ({ startTime, setGameState, imageId }) => {
  const [leaderboard, setLeaderboard] = useState([["creator", 0]]);

  const endTime = Date.now();

  const updateLeaderboards = async () => {
    const results = await database().getLeaderboard(imageId);
    console.log(`results: ${results}`);
    setLeaderboard(results);
  };

  useEffect(() => {
    async function fetchData() {
      await updateLeaderboards();
    }
    fetchData();

    console.log(`fdafdafadsf: ${leaderboard}`);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="end-root-div">
      <p>time: {(endTime - startTime) / 1000}s</p>
      <div className="leaderboard">
        {leaderboard.map((score) => {
          return (
            <div className="leaderboard-score">
              {score[0]} : {score[1]}
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          setGameState("start");
        }}
        className="end-restart-btn"
      >
        Home
      </button>
    </div>
  );
};

export default EndScreen;
