import "./play.scss";
import App from "./App";
import Piano from "./piano/Piano";

export default function Play() {
  return (
    <div className="play-container">
      <div className="piano">
        <div className="tab">
          <h3 className="title">Try to play: </h3>
          <h3 className="music-name">HAPPY BIRTHDAY TO YOU</h3>
          <div className="notes">
            <h3>C4 C4 D4 C4 F4 E4</h3>
            <h3>C4 C4 D4 C4 G4 F4</h3>
            <h3>A4 A4 C5 A4 F4 E4 D4</h3>
            <h3>Bb4 Bb4 A4 F4 G4 F4</h3>
          </div>
        </div>
        <Piano />
      </div>
      <div className="music">
        <App />
      </div>
    </div>
  );
}
