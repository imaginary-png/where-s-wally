import "../../Assets/end_screen/HiScore.css";

const HiScore = ({ submitHiScore, updateName, name }) => {
  return (
    <div className="submit-hiscore-container">
      <label>Name:</label>
      <input
        type="text"
        required
        minLength={1}
        defaultValue={name}
        onBlur={(e) => {
          updateName(e.target.value);
        }}
      ></input>
      <button onClick={submitHiScore}>Submit</button>
    </div>
  );
};

export default HiScore;
