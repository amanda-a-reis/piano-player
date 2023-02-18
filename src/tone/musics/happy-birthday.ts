import * as Tone from "tone";
import { generateSound } from "../generate-sound";
import { generateDuration, params } from "../methods";

interface Verses {
    verse1: number[];
    verse2: number[];
    verse3: number[];
    verse4: number[];
    totalTime: number
}

const { quaver, crotchet, minim } = params;

const rhythm = {
  pattern1: [quaver, quaver, crotchet, crotchet, crotchet, minim],
  pattern2: [quaver, quaver, crotchet, crotchet, crotchet, crotchet, minim],
};

function sound(verse1: number[], verse2: number[], verse3: number[], verse4: number[]): void {
  generateSound("C4", rhythm.pattern1[0], verse1[0]);
  generateSound("C4", rhythm.pattern1[1], verse1[1]);
  generateSound("D4", rhythm.pattern1[2], verse1[2]);
  generateSound("C4", rhythm.pattern1[3], verse1[3]);
  generateSound("F4", rhythm.pattern1[4], verse1[4]);
  generateSound("E4", rhythm.pattern1[5], verse1[5]);

  generateSound("C4", rhythm.pattern1[0], verse2[0]);
  generateSound("C4", rhythm.pattern1[1], verse2[1]);
  generateSound("D4", rhythm.pattern1[2], verse2[2]);
  generateSound("C4", rhythm.pattern1[3], verse2[3]);
  generateSound("G4", rhythm.pattern1[4], verse2[4]);
  generateSound("F4", rhythm.pattern1[5], verse2[5]);

  generateSound("A4", rhythm.pattern2[0], verse3[0]);
  generateSound("A4", rhythm.pattern2[1], verse3[1]);
  generateSound("C5", rhythm.pattern2[2], verse3[2]);
  generateSound("A4", rhythm.pattern2[3], verse3[3]);
  generateSound("F4", rhythm.pattern2[4], verse3[4]);
  generateSound("E4", rhythm.pattern2[5], verse3[5]);
  generateSound("D4", rhythm.pattern2[6], verse3[6]);

  generateSound("Bb4", rhythm.pattern1[0], verse4[0]);
  generateSound("Bb4", rhythm.pattern1[1], verse4[1]);
  generateSound("A4", rhythm.pattern1[2], verse4[2]);
  generateSound("F4", rhythm.pattern1[3], verse4[3]);
  generateSound("G4", rhythm.pattern1[4], verse4[4]);
  generateSound("F4", rhythm.pattern1[5], verse4[5]);
}

function generateVerses(init: number, velocity: number): Verses {
  const verse1 = generateDuration(init, rhythm.pattern1, velocity);
  const verse2 = generateDuration(
    verse1[verse1.length - 1],
    rhythm.pattern1,
    velocity
  );
  const verse3 = generateDuration(
    verse2[verse2.length - 1],
    rhythm.pattern2,
    velocity
  );
  const verse4 = generateDuration(
    verse3[verse3.length - 1],
    rhythm.pattern1,
    velocity
  );

  return {
    verse1,
    verse2,
    verse3,
    verse4,
    totalTime: verse4[verse4.length - 1],
  };
}

const { totalTime } = generateVerses(1, 1);

function play(vel: unknown): void {
  const now = Tone.now();

  const velocity = vel !== "" ? vel : 1;

  const { verse1, verse2, verse3, verse4 } = generateVerses(now + 1, velocity as number);

  sound(verse1, verse2, verse3, verse4);
}

export { play, totalTime };
