import React from 'react';
import { whiteNotes, blackNotes, useKeyboardShortcuts } from "./utils";
import {
  KeyboardWrapper,
  KeyboardWhites,
  KeyboardBlacks,
  SkipKey
} from "./Styles";
import NoteKey from "./NoteKey";

const OctaveKeys = ({octave, keyboardShortcuts = false}) => {
  useKeyboardShortcuts(octave, keyboardShortcuts);
  
  return (
    <KeyboardWrapper>
      <KeyboardWhites>
        {whiteNotes.map(note => (
          <NoteKey
            key={note + octave}
            note={note + octave}
          />
        ))}
      </KeyboardWhites>

      <KeyboardBlacks>
        {blackNotes.map((note, idx) =>
          note === null ? (
            <SkipKey key={`skip-${idx}-${octave}`} />
          ) : (
            <NoteKey
              key={note + octave}
              note={note + octave}
              black
            />
          )
        )}
      </KeyboardBlacks>
    </KeyboardWrapper>
  )
};

export default OctaveKeys;