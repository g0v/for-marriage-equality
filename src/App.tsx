import React, { Component } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Canvass, { Area, getAreas } from "./canvass";
import Navbar from "./components/Navbar";
import Selector from "./components/Selector";
import Button, { ButtonType } from "./components/Button";

import G0vbar from "g0v-banner";
import DatePicker from 'react-datepicker';
import moment from 'moment';

import distance from '@turf/distance';
import {point} from '@turf/helpers';

export interface Props {
  shifts: Array<Canvass>;
}

type MaybeMoment = moment.Moment | null;

export interface State {
  area: string;
  query: string;
  shifts: Array<Canvass>;
  date: MaybeMoment;
  lat?: number;
  lng?: number;
  orderByDistance: boolean;
  loadingLocation: boolean;
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
  handleLocationRequest(e: React.MouseEvent<HTMLButtonElement>): void {
    this.setState({loadingLocation: true})
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.applyCurrentLocation.bind(this))
    } else {
      alert("此瀏覽器不支援定位搜尋")
      this.setState({loadingLocation: false})
    }
  }

  applyCurrentLocation(location:any) {
    this.state.shifts.sort(function(a: Canvass, b: Canvass){
      console.log(a)
      console.log(b)
      var position = point([location.coords.latitude, location.coords.longitude])
      if (a.lat && a.lng) {
        var aPos = point([a.lat, a.lng])
        a.distance = distance(position, aPos)
      } else {
        a.distance = 9999
      }
      if (b.lat && b.lng) {
        var bPos = point([b.lat, b.lng])
        b.distance = distance(position, bPos)
      } else {
        b.distance = 9999
      }        
      return a.distance! - b.distance!
    })
    console.log(this.state);
    this.setState({ orderByDistance: true, loadingLocation: false })
    // sort using distance
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      area: "區域",
      query: '',
      shifts: props.shifts,
      date: null,
      lat: undefined,
      lng: undefined,
      orderByDistance: false,
      loadingLocation: false,
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
            <Button buttonText={this.state.loadingLocation ? "定位中..." : "定位尋找附近開團"} type={ButtonType.primary} onClick={this.handleLocationRequest.bind(this)} />
            <DatePicker 
              selected={this.state.date}
              onChange={this.handleDateUpdate.bind(this)}
              className="filter-form__date-picker"
              minDate={moment()}
              maxDate={moment("2018-11-24")}
              showDisabledMonthNavigation
              placeholderText="選擇日期"
            />
            <Selector 
              defaultValue="區域"
              defaultTitle="區域"
              options={getAreas()} 
              onChange={this.handleAreaChange.bind(this)}
              title={this.state.area}
            />
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
          </div>
        </div>
        <Gallery shifts={shifts} lat={this.state.lat} lng={this.state.lng} />
        <footer className="footer">資料來源：<a rel="noopener noreferrer" target="_blank" href="https://docs.google.com/spreadsheets/d/131ImXHRXARx8j8t9esNCJhrLUfZQG347L1k3GsJ1m1Q/edit#gid=0">兩好三壞，全台開團資訊</a></footer>
      </div>
    );
  }
}

export default App;
