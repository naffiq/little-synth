import React from "react";

import { SynthContext } from "./utils";
import OctaveKeys from "./OctaveKeys";
import { KeyboardWrapper } from "./Styles";

const SynthKeyboard = ({ synth }) => {
  const [activeNote, setActiveNote] = React.useState(null);

  const onAttack = note => {
    setActiveNote(note);
    synth.triggerAttack(note);
  };

  const onRelease = () => {
    synth.triggerRelease();
    setActiveNote(null);
  };

  return (
    <SynthContext.Provider value={{ activeNote, onAttack, onRelease, synth }}>
      <KeyboardWrapper>
        <OctaveKeys octave={4} keyboardShortcuts/>
        <OctaveKeys octave={5}/>
      </KeyboardWrapper>
    </SynthContext.Provider>
  );
};

export default SynthKeyboard;
