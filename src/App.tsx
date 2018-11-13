import React, { Component } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Canvass, { Area, getAreas } from "./canvass";
import Navbar from "./components/Navbar";
import Selector from "./components/Selector";

export interface Props {
  shifts: Array<Canvass>;
}

export interface State {
  area: Area;
  query: string;
  shifts: Array<Canvass>
}

function isInArea(a: Canvass): boolean {
  return true;
}

class App extends Component<Props, State> {
  handleAreaChange(newArea: Area): void {
    this.setState({ area: newArea });
  }
  handleQueryUpdate(e: any) {
    this.setState({ query: e.target.value });
  }
  constructor(props: Props) {
    super(props);
    this.state = {
      area: 0,
      query: '',
      shifts: props.shifts
    }
    console.log(props.shifts[0].forQuery());
  }
  render() {
    const shifts: Array<Canvass> = this.state.shifts.filter(c => c.containsQuery(this.state.query));
    
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="search">
              <input
                type="search"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="搜尋"
                value={this.state.query}
                onChange={this.handleQueryUpdate.bind(this)}
              />
            </div>
            <Selector defaultTitle="區域" options={getAreas()} />
          </div>
        </div>
        <Gallery shifts={shifts} />
      </div>
    );
  }
}

export default App;
