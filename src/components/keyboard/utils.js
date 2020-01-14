import { createContext, useContext, useEffect } from "react";
export const whiteNotes = ["C", "D", "E", "F", "G", "A", "B"];
export const whiteNoteKeys = ["a", "s", "d", "f", "g", "h", "j"];
export const blackNotes = [null, "C#", "D#", null, "F#", "G#", "A#"];

export const SynthContext = createContext(null);

export const getNoteByKey = (key, octave = 4) => {
  const getNote = () => {
    switch (key.toLowerCase()) {
      case "a":
        return whiteNotes[0]; // C
      case "s":
        return whiteNotes[1]; // D
      case "d":
        return whiteNotes[2]; // E
      case "f":
        return whiteNotes[3]; // F
      case "g":
        return whiteNotes[4]; // G
      case "h":
        return whiteNotes[5]; // A
      case "j":
        return whiteNotes[6]; // B
      // Black Keys
      case "w":
        return blackNotes[1]; // C#
      case "e":
        return blackNotes[2]; // D#
      case "t":
        return blackNotes[4]; // F#
      case "y":
        return blackNotes[5]; // G#
      case "u":
        return blackNotes[6]; // A#
      default:
        return null;
    }
  };
  const note = getNote();

  return note === null ? null : note + octave;
};

export const useKeyboardShortcuts = (octave, isActive) => {
  const { onAttack, onRelease, activeNote } = useContext(SynthContext);

  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      const note = getNoteByKey(key, octave);
      if (note && note !== activeNote) {
        onAttack(note);
      }
    };
    const handleKeyUp = () => onRelease();

    if (isActive) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
    }

    return () => {
      if (isActive) {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      }
    };
  }, [activeNote, isActive, onAttack, onRelease, octave]);
};
