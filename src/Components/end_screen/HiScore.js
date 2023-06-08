import { useEffect, useState } from "react";
import "../../Assets/end_screen/HiScore.css";

const HiScore = ({ submitHiScore, updateName, name }) => {
  const [submitted, setSubmitted] = useState(false);

  const userSubmitScore = () => {
    if (name === "") {
      const errEle = document.getElementById("submit-score-name-error");
      if (errEle !== null) {
        errEle.style.visibility = "visible";
      }
      return;
    }
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) submitHiScore();
    // eslint-disable-next-line
  }, [submitted]);

  const scoreSubmission = () => {
    if (!submitted)
      return (
        <div className="submit-hiscore-container">
          <label>Name:</label>
          <input
            type="text"
            minLength={1}
            defaultValue={name}
            onBlur={(e) => {
              updateName(e.target.value);
            }}
          ></input>
          <button id="score-submit-btn" onClick={userSubmitScore}>
            Submit
          </button>
        </div>
      );
    else return <div>submitted</div>;
  };

  return scoreSubmission();
};

export default HiScore;
