import React, { useContext } from "react";
import { SynthContext } from "./utils";
import { KeyButton } from "./Styles";

const NoteKey = ({note, black = false}) => {
  const {activeNote, onAttack, onRelease} = useContext(SynthContext);
  const onMouseEnter = () => {
    if (activeNote !== null) {
      onAttack(note);
    }
  }

  return (
    <KeyButton
      black={black}
      className={activeNote === note ? "active" : ""}
      onMouseDown={() => onAttack(note)}
      onMouseEnter={onMouseEnter}
      onMouseUp={() => onRelease()}
    />
  )
}

export default NoteKey;