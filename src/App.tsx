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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">兩好三壞，全台開團資訊（11/12更新）</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">開團資訊 <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://equallove.tw">關於婚影平權大平台</a>
              </li>
            </ul>
          </div>
        </nav>
        <Gallery shifts={shifts} />
      </div>
      );
    }
  }
  
  export default App;
  