import './App.css';
import React from 'react';
import DrumMachine from './drummachine';

//#region App
function App() {
  return (
    <div className="App">
        <div><DrumMachine/></div>
    </div>
  );
}

export default App;
//#endregion

//#region SampleSet
export const audioFiles = [{
  id: 'Q',
  name: 'Hi Tom',
  url: '../audio/TOM2.wav'
}, {
  id: 'W',
  name: 'Lo Tom',
  url: '../audio/TOM1.wav'
}, {
  id: 'E',
  name: 'Crash',
  url: '../audio/CYM3.wav'
}, {
  id: 'A',
  name: 'Closed Hat',
  url: '../audio/CLSHAT1.wav'
}, {
  id: 'S',
  name: 'Open Hat',
  url: '../audio/OPHAT1.wav'
}, {
  id: 'D',
  name: 'Tamborine',
  url: '../audio/TAMB.wav'
}, {
  id: 'Z',
  name: 'Kick',
  url: '../audio/BASS1.wav'
}, {
  id: 'X',
  name: 'Snare',
  url: '../audio/SNARE1.wav'
}, {
  id: 'C',
  name: 'Shaker',
  url: '../audio/SHAKE1.wav'
}];
//#endregion