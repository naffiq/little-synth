import React from "react";
import "./App.css";
import SynthWave from "./components/visualizer/SynthWave";
import SynthControls from "./components/synth-controls/SynthControls";

function App() {
  return (
    <div className="App">
      <SynthControls>
        {({ waveform }) => <SynthWave waveform={waveform} />}
      </SynthControls>
    </div>
  );
}

export default App;
