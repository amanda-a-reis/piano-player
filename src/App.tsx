import "./app.scss";
import { play, totalTime } from "./tone/musics/happy-birthday";
import { useState, ChangeEvent } from "react";

function App() {
  const [velocity, setVelocity] = useState(1);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") {
      if (Number(event.target.value) > 50) {
        setVelocity(50);
      } else if (Number(event.target.value) <= 0) {
        setVelocity(1);
      } else {
        setVelocity(Number(event.target.value));
      }
    } else {
      setVelocity(1);
    }
  };

  let isPlaying = false;

  return (
    <div className="app-container">
      <h2>Listen HAPPY BIRTHDAY TO YOU!</h2>
      <div className="change-velocity">
        <input
          type="number"
          min="1"
          max="50"
          className="velocity-input"
          name="velocity"
          placeholder="Change velocity"
          onChange={handleChange}
        />
        <h3 className="velocity-value">velocity: {velocity}</h3>
      </div>

      <button
        type="button"
        className="play-button"
        onClick={() => {
          let TIME = (totalTime * 1000) / velocity;

          if (!isPlaying) {
            play(velocity);
            isPlaying = true;
          }
          setTimeout(() => {
            isPlaying = false;
          }, TIME);
        }}
      >
        PLAY
      </button>
    </div>
  );
}

export default App;
