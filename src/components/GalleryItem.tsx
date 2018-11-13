import React, { Component } from 'react';
import Canvass from '../index';
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

        return (
            <div className="gallery__item">
                { shift.type !== null &&
                    <div className="gallery__item__labels-container">
                        { shift.type.indexOf("發文宣") != -1 &&
                            <Label text="發文宣" />
                        }
                        { shift.type.indexOf("對話（") != -1 &&
                            <Label text="對話" />
                        }
                        { shift.type.indexOf("代工") != -1 &&
                            <Label text="代工" />
                        }
                        { shift.type.indexOf("掃街") != -1 &&
                            <Label text="掃街" />
                        }
                        { shift.type.indexOf("擺攤") != -1 &&
                            <Label text="擺攤" />
                        }
                    </div>
                }
                <h2 className="gallery__item__header">
                </h2>
                <h3 className="gallery__item__subheader">
                </h3>
                <div className="stats-container">
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
                        { shift.contactInfo !== null && shift.contactInfo.indexOf("FB") != -1 &&
                            <Action text="Facebook" type="fb" />
                        }
                        { shift.contactInfo !== null && shift.contactInfo.indexOf("LINE") != -1 &&
                            <Action text="Line" type="line" />
                        }
                        { shift.contactInfo !== null && shift.contactInfo.indexOf("PHONE") != -1 &&
                            <Action text="Phone" type="phone" />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default GalleryItem