import Tone from "tone";
import React, { useState, useEffect } from "react";

import SynthKeyboard from "../keyboard/SynthKeyboard";
import { Select, NumberInput } from "../inputs";
import {
  SynthContainer,
  Label,
  ControlsWrapper,
  ControlsBlock,
  ControlsBlockLabel,
  ControlsBlockInputWrapper
} from "./Styles";
import { oscillatorTypeList } from "./utils";

const waveform = new Tone.Waveform().toMaster();
const synth = new Tone.Synth({}).connect(waveform);

const SynthControls = ({ children }) => {
  const [oscillatorType, setOscillatorType] = useState("sine");
  const [envelopeAttack, setEnvelopeAttack] = useState(synth.envelope.attack);
  const [envelopeDecay, setEnvelopeDecay] = useState(synth.envelope.decay);
  const [envelopeSustain, setEnvelopeSustain] = useState(
    synth.envelope.sustain
  );
  const [envelopeRelease, setEnvelopeRelease] = useState(
    synth.envelope.release
  );
  useEffect(() => {
    synth.oscillator.type = oscillatorType;
  }, [oscillatorType]);
  useEffect(() => {
    synth.envelope.attack = envelopeAttack;
    synth.envelope.decay = envelopeDecay;
    synth.envelope.sustain = envelopeSustain;
    synth.envelope.release = envelopeRelease;
  }, [envelopeAttack, envelopeDecay, envelopeSustain, envelopeRelease]);

  const oscillatorTypeValue = oscillatorTypeList.find(
    ({ value }) => value === oscillatorType
  );

  return (
    <>
      {children({ waveform })}
      <SynthContainer>
        <ControlsWrapper>
          <ControlsBlock>
            <ControlsBlockLabel>Oscillator</ControlsBlockLabel>

            <ControlsBlockInputWrapper>
              <Label>Type</Label>
              <Select
                values={[oscillatorTypeValue]}
                options={oscillatorTypeList}
                searchable={false}
                onChange={val => setOscillatorType(val[0].value)}
              />
            </ControlsBlockInputWrapper>
          </ControlsBlock>
          <ControlsBlock>
            <ControlsBlockLabel>Envelope</ControlsBlockLabel>

            <ControlsBlockInputWrapper>
              <Label>Attack</Label>
              <NumberInput
                value={envelopeAttack}
                min="0"
                step="0.1"
                onChange={val => setEnvelopeAttack(val)}
              />
            </ControlsBlockInputWrapper>
            <ControlsBlockInputWrapper>
              <Label>Decay</Label>
              <NumberInput
                value={envelopeDecay}
                min="0"
                step="0.1"
                onChange={val => setEnvelopeDecay(val)}
              />
            </ControlsBlockInputWrapper>
            <ControlsBlockInputWrapper>
              <Label>Sustain</Label>
              <NumberInput
                value={envelopeSustain}
                min="0"
                step="0.1"
                onChange={val => setEnvelopeSustain(val)}
              />
            </ControlsBlockInputWrapper>
            <ControlsBlockInputWrapper>
              <Label>Release</Label>
              <NumberInput
                value={envelopeRelease}
                min="0.1"
                step="0.1"
                onChange={val => setEnvelopeRelease(val)}
              />
            </ControlsBlockInputWrapper>
          </ControlsBlock>
        </ControlsWrapper>
        <SynthKeyboard synth={synth} octave="4" />
      </SynthContainer>
    </>
  );
};

export default SynthControls;
