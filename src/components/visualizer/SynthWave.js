import React from "react";
import P5Wrapper from "react-p5-wrapper";
import { useWindowSize } from "./utils";

const HEIGHT = 400;
const sketch = (toneWaveform, width) => {
  return p => {
    p.setup = function() {
      p.createCanvas(width, HEIGHT);
      p.noFill();
      p.background(0); // alpha
    };

    p.draw = function() {
      p.background(0, 0, 0, 100); // alpha

      // analyze the waveform
      const waveformValues = toneWaveform.getValue();
      p.stroke("#B83373");
      p.strokeWeight(2);
      p.beginShape();
      for (let i = 0; i < waveformValues.length; i++) {
        let x = p.map(i, 0, waveformValues.length, 0, width);
        let y = p.map(waveformValues[i], -1, 1, -HEIGHT / 1.1, HEIGHT / 1.1);
        p.vertex(x, y + HEIGHT / 2);
      }
      p.endShape();
    };
  };
};

const SynthWave = ({ waveform }) => {
  const { width } = useWindowSize();
  return (
    <div style={{ marginBottom: -HEIGHT / 2.1, marginTop: -HEIGHT / 1.8 }}>
      <P5Wrapper sketch={sketch(waveform, width)} />
    </div>
  );
};

export default SynthWave;
