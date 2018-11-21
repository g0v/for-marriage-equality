/* tslint:disable-next-line */
import React, { Component } from 'react';

import Canvass from '../Canvass';
import GalleryItem from './GalleryItem';

import distance from '@turf/distance';
import { point } from '@turf/helpers';

export interface IProps {
  shifts: Canvass[];
  lat?: number;
  lng?: number;
}

export type Unit =
  'miles' |
  'nauticalmiles' |
  'degrees' |
  'radians' |
  'inches' |
  'yards' |
  'meters' |
  'metres' |
  'kilometers' |
  'kilometres' |
  undefined;

class Gallery extends Component<IProps> {
  public render() {
    const { shifts, lat, lng } = this.props;

    return (
      <div className="gallery container">
        {shifts.map((shift, index) => {
          let distanceTo;

          if (shift.lat && shift.lng && lat && lng) {
            const from = point([lat, lng]);
            const to = point([shift.lat, shift.lng]);
            const options = { units: 'kilometres' as Unit };

            distanceTo = distance(from, to, options);
          }

          return <GalleryItem key={index} shift={shift} distance={distanceTo} />;
        })}
      </div>
    );
  }
}

export default Gallery;
