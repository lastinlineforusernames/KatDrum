import React from 'react';
import DrumPad from './drumpad'
import {audioFiles} from './audiofiles';

class DrumMachine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          padArray: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
          display: ''
      }
      this.handler = this.handler.bind(this);
  }
  handler(soundName) {
    this.setState({
      display: soundName
    });
    setTimeout(() => this.setState({display: ''}), 500)
  }
  render() {
      const drumPads = this.state.padArray.map(element => {
          return <DrumPad 
              audioSource={audioFiles[audioFiles.findIndex(e => e.id === element)].url} 
              name={audioFiles[audioFiles.findIndex(e => e.id === element)].name}
              keyIndex={audioFiles.findIndex(e => e.id === element)} 
              handler={this.handler}
              padID={element}/>
      });
      return (
          <div className="drum-machine" id="drum-machine">
              <div key="padwrapper" className="padwrapper" id="padWrapper">
                  {drumPads}
              </div>
              <div key="title" className="title" id="title">katDRUM</div>
              <div key="kat" className="kat" id="kat">
                <img key="imgkat" id="imgkat" src="../images/kat.jpg" alt="It's Kat!" />
              </div>
              <div key="display" className="display" id="display">{this.state.display}</div>
          </div>
      )
  }
}

export default DrumMachine