import React from "react";

import { SynthContext } from "./utils";
import OctaveKeys from "./OctaveKeys";
import { KeyboardWrapper } from "./Styles";

const SynthKeyboard = ({ synth }) => {
  const [activeNote, setActiveNote] = React.useState(null);
  const [mouseDown, setMouseDown] = React.useState(false);

  const onAttack = note => {
    setActiveNote(note);
    synth.triggerAttack(note);
  };

  const onRelease = () => {
    synth.triggerRelease();
    setActiveNote(null);
    setMouseDown(false);
  };

  return (
    <SynthContext.Provider
      value={{
        setMouseDown,
        mouseDown,
        activeNote,
        onAttack,
        onRelease,
        synth
      }}
    >
      <KeyboardWrapper>
        <OctaveKeys octave={3} keyboardShortcuts />
        <OctaveKeys octave={4} />
      </KeyboardWrapper>
    </SynthContext.Provider>
  );
};

export default SynthKeyboard;
