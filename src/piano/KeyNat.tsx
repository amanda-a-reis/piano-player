import { generateSound } from "../tone/generate-sound";
import "./keyNat.scss";

interface Params {
    note: string;
    time: number;
}

export default function KeyNat({ note, time }: Params) {
  return (
    <div className="keyNat">
      <button
        className="keyNat-button"
        onClick={() => {
          generateSound(note, time);
        }}
      >{note}</button>
    </div>
  );
}
