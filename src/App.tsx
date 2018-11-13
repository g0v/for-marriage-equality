import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Canvass, { Area, getAreas } from './canvass';
import Navbar from './components/Navbar';
import Selector from './components/Selector';

export interface Props {
  shifts: Array<Canvass>;
}

export interface State {
  area: Area;
}

function isInArea(a: Canvass): boolean {
  return true;
}

class App extends Component<Props, State> {
  handleAreaChange(newArea: Area): void {
    this.setState({ area: newArea });
  }
  render() {
    const { shifts } = this.props;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="search">
              <input type="search" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="搜尋"></input>
            </div>
            <Selector defaultTitle="區域" options={getAreas()} />
          </div>
        </div>
        <Gallery shifts={shifts} />
      </div >
    );
  }
}

export default App;
