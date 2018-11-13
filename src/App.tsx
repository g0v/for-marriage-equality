import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Canvass from './canvass';

export interface Props {
  shifts: Array<Canvass>;
}

class App extends Component<Props> {
  render() {
    const { shifts } = this.props;

    return (
      <div className="App">
        <Gallery shifts={shifts} />
      </div>
      );
    }
  }
  
  export default App;
  