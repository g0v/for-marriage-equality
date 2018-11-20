/// <reference types="@types/googlemaps" />
/* global google */

/* tslint:disable-next-line */
import React from 'react';
import Canvass from '../Canvass';

/**
 * A little bit hack way to turn google API loading into a promise.
 *
 * @returns {promise} once resolved, google API is loaded and ready to use.
 */
// const gmapPromise = new Promise(resolve => {
//   window.__initGoogleMap__ = () => {
//     resolve();
//   }
// })

interface IProps {
  shifts: Canvass[];
}

class Map extends React.Component<IProps> {
  private rootEl: React.RefObject<HTMLDivElement>;
  constructor(props: IProps) {
    super(props);
    this.rootEl = React.createRef();
  }

  public shouldComponentUpdate() {
    // After componentDidMount, DOM is manipulated by Google Maps.
    // Should never update.
    return false;
  }

  public componentDidMount() {
    const map = new google.maps.Map(this.rootEl.current, {
      center: { lat: 23.877295, lng: 121.030752 },
      zoom: 8,
    });

    this.props.shifts.forEach(({ lat, lng, date, startTime, endTime, location }) => {
      if (lat === undefined || lng === undefined) {
        return;
      }
      const position: google.maps.LatLng = new google.maps.LatLng(lat, lng);
      const marker = new google.maps.Marker({
        map,
        position,
        title: `${date} ${startTime}-${endTime} - ${location}`,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div>${date} ${startTime}-${endTime} - ${location}</div><script>alert(1)</script>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  }

  public render() {
    return (<div className="map__root" ref={this.rootEl} />);
  }
}

export default Map;
