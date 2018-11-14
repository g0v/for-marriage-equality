import React, { Component } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Canvass, { Area, getAreas } from "./canvass";
import Navbar from "./components/Navbar";
import Selector from "./components/Selector";
-import G0vbar from "./components/g0vbar";                                                                          │
import DatePicker from 'react-datepicker';
import moment from 'moment';

export interface Props {
  shifts: Array<Canvass>;
}

type MaybeMoment = moment.Moment | null;

export interface State {
  area: string;
  query: string;
  shifts: Array<Canvass>;
  date: MaybeMoment;
}

function isInArea(a: Canvass): boolean {
  return true;
}

class App extends Component<Props, State> {
  handleAreaChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newArea = e.target.value;
    this.setState({ area: newArea });
  }
  handleQueryUpdate(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ query: e.target.value });
  }
  handleDateUpdate(newDate: moment.Moment): void {
    this.setState({ date: newDate });
  }
  isOnThisDate(c: Canvass): boolean {
    if(this.state.date===null) return true;
    moment.locale("zh-tw");
    const canvassDate = moment(c.date.substring(0, c.date.length-3), "MM/DD");
    if(this.state.date.isSame(canvassDate, "day")) return true;
    return false;
  }
  constructor(props: Props) {
    super(props);
    this.state = {
      area: "區域",
      query: '',
      shifts: props.shifts,
      date: null,
    }
    console.log(props.shifts[0].forQuery());
  }
  areaFilter(c: Canvass): boolean {
    if(this.state.area === "無" || this.state.area === "區域") return true;
    return c.containsQuery(this.state.area);
  }
  render() {
    const shifts: Array<Canvass> = 
      this.state.shifts
        .filter(c => c.containsQuery(this.state.query))
        .filter(this.areaFilter.bind(this))
        .filter(this.isOnThisDate.bind(this));
  
    return (
      <div className="App">
        <G0vbar width="1137px" />
        <Navbar />
        <div className="container">
          <div className="row filter-form">
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
            <Selector 
              defaultValue="區域"
              defaultTitle="區域"
              options={getAreas()} 
              onChange={this.handleAreaChange.bind(this)}
              title={this.state.area}
            />
            <DatePicker 
              selected={this.state.date}
              onChange={this.handleDateUpdate.bind(this)}
              className="filter-form__date-picker"
              minDate={moment()}
              maxDate={moment("2018-11-24")}
              showDisabledMonthNavigation
              placeholderText="選擇日期"
            />
          </div>
        </div>
        <Gallery shifts={shifts} />
      </div>
    );
  }
}

export default App;
