import React, { useContext } from "react";
import { SynthContext } from "./utils";
import { KeyButton } from "./Styles";

const NoteKey = ({ note, black = false }) => {
  const {
    activeNote,
    onAttack,
    onRelease,
    mouseDown,
    setMouseDown
  } = useContext(SynthContext);
  console.log(setMouseDown);

  const handleMouseEnter = () => {
    console.log('enter')
    if (activeNote !== null && mouseDown) {
      onAttack(note);
    }
  };
  const handleMouseDown = () => {
    setMouseDown(true);
    onAttack(note);
  };
  const handleMouseUp = () => {
    setMouseDown(false);
    onRelease();
  };
  return (
    <KeyButton
      black={black}
      className={activeNote === note ? "active" : ""}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseUp={handleMouseUp}
    />
  );
};

export default NoteKey;
