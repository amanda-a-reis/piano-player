import { generateSound } from "../tone/generate-sound";
import "./keyNat.scss";

interface Params {
  note: string;
  time: number;
}

export default function KeyNat({ note, time }: Params) {
  return (
    <li className="keyNat">
      <button
        type="button"
        className="keyNat-button"
        onClick={() => {
          generateSound(note, time);
        }}
      >
        {note}
      </button>
    </li>
  );
}
