import React, { Component } from 'react';
import Canvass, { CanvassType } from '../canvass';
import Label from './Label';
import KeyValue from './KeyValue';
import TextBlock from './TextBlock';
import Action from './Action';

export interface Props {
    shift: Canvass
}

class GalleryItem extends Component<Props> {
    render() {
        const { shift } = this.props;
        var labels = [];
        for (var i = 0; i < shift.types.length; i++) {
            labels.push(<Label key={i} text={shift.getType(shift.types[i])} />)
        }
        return (
            <div className="gallery__item">
                { shift.types.length > 0 && shift.types[0] !== CanvassType.none &&
                    <div className="gallery__item__labels-container">
                    {labels}
                    </div>
                }
                <h2 className="gallery__item__header">
                    {shift.location}
                </h2>
                <h3 className="gallery__item__subheader">
                    {`${shift.date} ${shift.startTime} ~ ${shift.endTime}`}
                </h3>
                <div className="gallery__item__stats-container">
                    { shift.volunteersNeeded !== null &&
                        <KeyValue k="希望志工人數" v={`${shift.volunteersNeeded}`} />
                    }
                    { shift.flyers !== null &&
                        <KeyValue k="預計發出文宣份數" v={`${shift.flyers}`} />
                    }
                </div>
                { shift.notes && 
                    <TextBlock text={shift.notes} />
                }
                <div className="gallery__item__contact-container">
                    { shift.name && 
                        <KeyValue k="團長" v={shift.name} />
                    }
                    <div className="gallery__item__contact-container__actions-container">
                        { shift.line !== "" &&
                            <Action contact={shift.line} type="line" />
                        }
                        { shift.phone !== "" &&
                            <Action contact={shift.phone} type="phone" />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default GalleryItem