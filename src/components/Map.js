/* global google */

import React from 'react';

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

class Map extends React.Component {
  static defaultProps = {
    shifts: [],
  }

  constructor(props) {
    super(props);
    this.rootEl = React.createRef();
  }

  shouldComponentUpdate() {
    // After componentDidMount, DOM is manipulated by Google Maps.
    // Should never update.
    return false;
  }

  componentDidMount() {
    const map = new google.maps.Map(this.rootEl.current, {
      center: {lat: 23.877295, lng: 121.030752},
      zoom: 8,
    });

    this.props.shifts.forEach(({lat, lng, date, startTime, endTime, location}) => {
      const marker = new google.maps.Marker({
        position: {lat, lng},
        map,
        title: `${date} ${startTime}-${endTime} - ${location}`
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div>${date} ${startTime}-${endTime} - ${location}</div><script>alert(1)</script>
        `
      })

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      })
    })
  }

  render(){
    return (<div className="map__root" ref={this.rootEl} />)
  }
}

export default Map;
