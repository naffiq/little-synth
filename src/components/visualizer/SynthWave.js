import React from "react";
import P5Wrapper from "react-p5-wrapper";

const sketch = (toneWaveform, width) => {
  const height = 200;
  return (p) => {
    p.setup = function () {
      p.createCanvas(width, height);
      p.noFill();
      p.background(0); // alpha
    }

    p.draw = function() {
      p.background(0, 0, 0, 100); // alpha

      // analyze the waveform
      const waveformValues = toneWaveform.getValue();
      p.stroke("#B83373");
      p.strokeWeight(2);
      p.beginShape();
      for (let i = 0; i < waveformValues.length; i++) {
        let x = p.map(i, 0, waveformValues.length, 0, width);
        let y = p.map(waveformValues[i], -1, 1, -height, height);
        p.vertex(x, y + height / 2);
      }
      p.endShape();
    }
  }
}

const SynthWave = ({ waveform }) => {
  const width = window.innerWidth;
  return <P5Wrapper sketch={sketch(waveform, width)} />;
};

export default SynthWave;