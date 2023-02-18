import { generateSound } from "../tone/generate-sound";
import "./keyAcc.scss";

interface Params {
  note: string;
  time: number;
}

export default function KeyAcc({ note, time }: Params) {
    const name = note !== "empty" ? 'keyAcc-button': 'empty'
  return (
    <div className="keyAcc">
      <button
        className={name}
        onClick={() => {
          generateSound(note, time);
        }}
      >
        {note}
      </button>
    </div>
  );
}
