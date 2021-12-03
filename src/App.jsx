import './App.css';
import React from 'react';
import DrumMachine from './drummachine';
import LinkButton from './LinkButton';

function App() {
  return (
    <div className="App">
        <div><DrumMachine/></div>
        <LinkButton id="github" 
                    url="https://github.com/lastinlineforusernames/KatDrum"
                    text="View on GitHub" />
    </div>
  );
}

export default App;