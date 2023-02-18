function generateNaturalNotes(octave: string) {
  const keys = [
    {
      note: `C${octave}`,
    },
    {
      note: `D${octave}`,
    },
    {
      note: `E${octave}`,
    },
    {
      note: `F${octave}`,
    },
    {
      note: `G${octave}`,
    },
    {
      note: `A${octave}`,
    },
    {
      note: `B${octave}`,
    },
  ];
  return keys;
}

function generateAccidents(octave: string) {
  const keys = [
    {
      note: `Db${octave}`,
    },
    {
      note: `Eb${octave}`,
    },
    {
      note: "empty",
    },
    {
      note: `Gb${octave}`,
    },
    {
      note: `Ab${octave}`,
    },
    {
      note: `Bb${octave}`,
    },
  ];

  return keys;
}

export { generateNaturalNotes, generateAccidents };
