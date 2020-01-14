import React from 'react';
import './App.css';
import SynthKeyboard from './components/keyboard/SynthKeyboard';
import Tone from 'tone';
import SynthWave from './components/visualizer/SynthWave';


const waveform = new Tone.Waveform();
var phaser = new Tone.Phaser({
	"frequency" : 5,
	"octaves" : 5,
	"baseFrequency" : 1000
}).chain(waveform, Tone.Master);
const synth = new Tone.FMSynth().connect(waveform, phaser);

function App() {
  return (
    <div className="App">
      <SynthWave waveform={waveform}/>
      <SynthKeyboard synth={synth} octave="4"/>
    </div>
  );
}

export default App;
