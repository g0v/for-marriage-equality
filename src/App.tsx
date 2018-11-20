// TSLint overrides because we like our component names to be capitalized.
/* tslint:disable-next-line */
import G0vBanner from 'g0v-banner';
import moment from 'moment';
/* tslint:disable-next-line */
import React, { Component } from 'react';
/* tslint:disable-next-line */
import DatePicker from 'react-datepicker';


import './App.css';
import Canvass, { getAreas } from './Canvass';
import Button, { ButtonType } from './components/Button';
import Gallery from './components/Gallery';
import Map from './components/Map';
import Navbar from './components/Navbar';
import Selector from './components/Selector';
import Toggles from './components/Toggles';


import distance from '@turf/distance';
import {point} from '@turf/helpers';

export interface IProps {
  shifts: Canvass[];
}

type MaybeMoment = moment.Moment | null;

export interface IState {
  area: string;
  query: string;
  view: string,
  shifts: Canvass[];
  date: MaybeMoment;
  lat?: number;
  lng?: number;
  orderByDistance: boolean;
  loadingLocation: boolean;
}

function isInArea(a: Canvass): boolean {
  return true;
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      area: '區域',
      date: null,
      lat: undefined,
      lng: undefined,
      loadingLocation: false,
      orderByDistance: false,
      query: '',
      shifts: props.shifts,
      view: '卡片列表',
    }
  }
  public handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newArea = e.target.value;
    this.setState({ area: newArea });
  }
  public handleQueryUpdate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ query: e.target.value });
  }
  public handleDateUpdate = (newDate: moment.Moment): void => {
    this.setState({ date: newDate });
  }
  public handleViewChange = (newView: string): void => {
    this.setState({ view: newView });
  }
  public render() {
    const { view, date, area, query, loadingLocation, lat, lng } = this.state;

    const shifts: Canvass[] =
      this.state.shifts
        .filter(c => c.containsQuery(this.state.query))
        .filter(this.areaFilter)
        .filter(this.isOnThisDate);

    return (
      <div className="App">
        <G0vBanner width="1137px" />
        <Navbar />
        <div className="container">
          <div className="row filter-form">
            <Button 
              buttonText={loadingLocation ? '定位中...' : '定位尋找附近開團'} 
              type={ButtonType.primary} 
              onClick={this.handleLocationRequest} 
            />

            <DatePicker
              selected={date}
              onChange={this.handleDateUpdate}
              className="filter-form__date-picker"
              minDate={moment()}
              maxDate={moment('2018-11-24')}
              showDisabledMonthNavigation
              placeholderText="選擇日期"
            />
            <Selector
              defaultValue="區域"
              defaultTitle="區域"
              options={getAreas()}
              onChange={this.handleAreaChange}
              title={area}
            />
            <div className="search">
              <input
                type="search"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="搜尋"
                value={query}
                onChange={this.handleQueryUpdate}
              />
            </div>
            <Toggles 
              options={['地圖', '卡片列表']}
              selected="卡片列表"
              onChange={this.handleViewChange}
            />
          </div>
        </div>
        {view === '卡片列表' && <Gallery shifts={shifts} lat={lat} lng={lng} />}
        {
          view === '地圖' &&
          <Map
            /* recreate Map whenever these key values change */ 
            key={`${query}/${area}/${date}`}
            shifts={shifts.filter(c => (c.lat!== undefined && c.lng !== undefined))}
          />
        }
        <footer className="footer">
          資料來源：
          <a 
            rel="noopener noreferrer" 
            target="_blank" 
            href={
              'https://docs.google.com/spreadsheets/d/' +
              '131ImXHRXARx8j8t9esNCJhrLUfZQG347L1k3GsJ1m1Q/' +
              'edit?ts=5bf0bd8f#gid=0'
            }
          >
            兩好三壞，全台開團資訊
          </a>
        </footer>
      </div>
    );
  }
  public handleLocationRequest = (e: React.MouseEvent<HTMLButtonElement>): void => {
    this.setState({loadingLocation: true})
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.applyCurrentLocation);
    } else {
      alert('此瀏覽器不支援定位搜尋');
      this.setState({loadingLocation: false});
    }
  }

  public applyCurrentLocation = (location: any) => {
    this.state.shifts.sort((a: Canvass, b: Canvass) => {
      const position = point([location.coords.latitude, location.coords.longitude]);
      if (a.lat && a.lng) {
        const aPos = point([a.lat, a.lng]);
        a.distance = distance(position, aPos);
      } else {
        a.distance = 9999;
      }
      if (b.lat && b.lng) {
        const bPos = point([b.lat, b.lng]);
        b.distance = distance(position, bPos);
      } else {
        b.distance = 9999;
      }
      return a.distance! - b.distance!;
    });
    this.setState({ orderByDistance: true, loadingLocation: false });
    // sort using distance
  }
  private isOnThisDate = (c: Canvass): boolean => {
    if(this.state.date===null) return true;
    moment.locale('zh-tw');
    const canvassDate = moment(c.date.substring(0, c.date.length-3), 'MM/DD');
    if(this.state.date.isSame(canvassDate, 'day')) return true;
    return false;
  }
  private areaFilter = (c: Canvass): boolean => {
    if(this.state.area === '無' || this.state.area === '區域') return true;
    return c.containsQuery(this.state.area);
  }
}

export default App;
