import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Canvass, { Area } from './canvass';
import Navbar from './components/Navbar';

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
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
  </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
        </div>
        <Gallery shifts={shifts} />
      </div >
    );
  }
}

export default App;
