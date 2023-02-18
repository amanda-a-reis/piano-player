const TIME_DEFAULT = 2;

const minim = TIME_DEFAULT / 2;
const crotchet = TIME_DEFAULT / 4;
const quaver = TIME_DEFAULT / 8;

const params = {
  minim,
  crotchet,
  quaver,
};

function generateDuration(init: number, notes: number[], velocity: number): number[] {
  const durations = [];
  let sum = 0;
  durations.push(init);
  for (const note of notes) {
    sum += note / velocity;
    const duration = sum + init;
    durations.push(duration);
  }
  return durations;
}

export { params, generateDuration };
