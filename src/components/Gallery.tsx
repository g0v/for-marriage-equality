import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import Canvass from '../canvass';
import distance from '@turf/distance';
import {point} from '@turf/helpers';

export interface Props {
    shifts: Array<Canvass>
    lat?: number
    lng?: number
}

export type Unit = "miles" | "nauticalmiles" | "degrees" | "radians" | "inches" | "yards" | "meters" | "metres" | "kilometers" | "kilometres" | undefined;

class Gallery extends Component<Props> {
    render() {
        const { shifts, lat, lng } = this.props

        return (
            <div className="gallery container">
                {shifts.map((shift, index) => 
                    {            
                        var distanceTo = undefined

                        if (shift.lat && shift.lng && lat && lng) {
                            var from = point([lat, lng])
                            var to = point([shift.lat, shift.lng])
                            var options = { units: 'kilometres' as Unit }
                            
                            distanceTo = distance(from, to, options)
                        }
                        
                        return <GalleryItem key={index} shift={shift} distance={distanceTo} />})}
            </div>
        )
    }
}

export default Gallery