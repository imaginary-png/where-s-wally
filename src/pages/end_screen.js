import { useEffect, useState } from "react";
import "../Assets/end_screen/end_screen.css";
import database from "../firebase/firebase-firestore";
import HiScore from "../Components/end_screen/HiScore";

const EndScreen = ({ setGameState, imageId, name, updateName, time }) => {
  const [leaderboard, setLeaderboard] = useState([["creator", 0]]);

  const updateLeaderboards = async () => {
    const results = await database().getLeaderboard(imageId);
    if (results === []) return;
    setLeaderboard(results);
  };

  useEffect(() => {
    async function fetchData() {
      await updateLeaderboards();
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  const isHighScore = () => {
    if (leaderboard.length === 0) return;
    if (time > leaderboard[leaderboard.length - 1][1]) return;
    return (
      <HiScore
        submitHiScore={submitScore}
        updateName={updateName}
        name={name}
      />
    );
  };

  const submitScore = async () => {
    if (leaderboard.length === 0) return;
    if (time > leaderboard[leaderboard.length - 1][1]) return;
    await database().updateLeaderboard(name, time, imageId);
    await updateLeaderboards();
    console.log("submitted!");
  };

  return (
    <div className="end-root-div">
      <p>time: {time}s</p>
      <div className="leaderboard-container">
        {leaderboard.map((score) => {
          return (
            <div className="leaderboard-data">
              <div className="score-name">{score[0]}</div>
              <div className="score-time">{score[1]}s</div>
            </div>
          );
        })}
        {isHighScore()}
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
