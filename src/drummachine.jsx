import React from 'react';
import Drumpad from './drumpad'
import {audioFiles} from './App';

// const audioFiles = [{
//         id: 'Q',
//         name: 'Hi Tom',
//         url: './audio/808-tom-01.wav'
//     }, {
//         id: 'W',
//         name: 'Lo Tom',
//         url: './audio/808-tom-02.wav'
//     }, {
//         id: 'E',
//         name: 'Crash',
//         url: './audio/808-cymbal-01.wav'
//     }, {
//         id: 'A',
//         name: 'Closed Hat',
//         url: './audio/808-hat-01.wav'
//     }, {
//         id: 'S',
//         name: 'Open Hat',
//         url: './audio/808-hat-05.wav'
//     }, {
//         id: 'D',
//         name: 'Clave',
//         url: '/audio/808-clave-01.wav'
//     }, {
//         id: 'Z',
//         name: 'Kick',
//         url: '/audio/808-kick-30.wav'
//     }, {
//         id: 'X',
//         name: 'Snare',
//         url: '/audio/808-snare-01.wav'
//     }, {
//         id: 'C',
//         name: 'Clap',
//         url: '/audio/808-clap-01.wav'
//     }];

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
          return <Drumpad 
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
                <img key="imgkat" id="imgkat" src="https://pbs.twimg.com/profile_images/1252272464228421639/bbtidIQN_400x400.jpg" alt="It's Kat!" />
              </div>
              <div key="display" className="display" id="display">{this.state.display}</div>
          </div>
      )
  }
}

export default DrumMachine