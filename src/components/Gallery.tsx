import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import Canvass from '../canvass';

export interface Props {
    shifts: Array<Canvass>
}

class Gallery extends Component<Props> {
    render() {
        const { shifts } = this.props
        
        return (
            <div className="gallery">
                {shifts.map((shift, index) => 
                    {return <GalleryItem key={index} shift={shift}/>})}
            </div>
        )
    }
}

export default Gallery