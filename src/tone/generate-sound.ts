import * as Tone from "tone";
import { octave3, octave4, octave5 } from "./constants";

interface PianoParams {
    urls: any;
    path: string;
}

function format(note: string): PianoParams {
  const size = note.length;
  const octave = note[size - 1];
  let urls;
  let path = ''
  switch (octave) {
    case "3":
      urls = octave3;
      path = "three";
      break;
    case "4":
      urls = octave4;
      path = "four";
      break;
    case "5":
      urls = octave5;
      path = "five";
      break;
  }

  return {
    urls,
    path,
  };
}

function generateSound(note: string, time: number, init: number = 0): void {
  const { urls, path } = format(note);

  const piano = new Tone.Sampler({
    urls,
    baseUrl: `/piano/${path}/`,
  }).toDestination();

  const now = Tone.now()

  let initialTime: number;

  if (init === 0) {
    initialTime = now
  } else {
    initialTime = init
  }

  Tone.loaded().then(() => {
    piano.triggerAttackRelease(note, time, initialTime);
  });
}

export { generateSound };
