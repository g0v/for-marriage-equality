// tslint:disable-next-line:import-name
import { distance } from '@turf/distance';
// tslint:disable-next-line:import-name
import React, { Component } from 'react';
import Canvass, { CanvassType } from '../Canvass';
import Action from './Action';
import KeyValue from './KeyValue';
import Label from './Label';
import TextBlock from './TextBlock';

export interface IProps {
  shift: Canvass;
  distance?: number;
}

class GalleryItem extends Component<IProps> {
  public render() {
    const { shift } = this.props;
    const labels = [];
    for (const type of shift.types) {
      labels.push(<Label key={type} text={shift.getType(type)} />);
    }
    const hasShift = shift.types.length > 0 && shift.types[0] !== CanvassType.none;
    const hasDistance = shift.distance !== 9999;
    return (
      <div className="gallery__item">
        {(hasShift || hasDistance) &&
          <div className="gallery__item__labels-container">
            {labels}
            {shift.distance && shift.distance !== 9999 &&
              <Label key={-1} text={`約距 ${shift.distance.toFixed(1} 公里`} />
            }
          </div>
        }
        <h2 className="gallery__item__header">
          {shift.location}
        </h2>
        <h3 className="gallery__item__subheader">
          {`${shift.date} ${shift.startTime} ~ ${shift.endTime}`}
        </h3>
        <div className={`gallery__item__stats-container ${(shift.notes ? '' : ' grow')}`}>
          {shift.volunteersNeeded !== null &&
            <KeyValue k="希望志工人數" v={`${shift.volunteersNeeded}`} />
          }
          {shift.flyers !== null &&
            <KeyValue k="預計發出文宣份數" v={`${shift.flyers}`} />
          }
        </div>
        {shift.notes &&
          <TextBlock text={shift.notes} />
        }
        <div className="gallery__item__contact-container">
          {shift.name &&
            <KeyValue k="團長" v={shift.name} />
          }
          {shift.contactInfo &&
            <KeyValue k="聯絡方式" v={shift.contactInfo} />
          }
          <div className="gallery__item__contact-container__actions-container">
            {shift.line !== '' &&
              <Action contact={shift.line} type="line" />
            }
            {shift.phone !== '' &&
              <Action contact={shift.phone} type="phone" />
            }
            {(shift.lat && shift.lng) &&
              <Action contact={`${shift.lat},${shift.lng}`} type="location" />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryItem;
