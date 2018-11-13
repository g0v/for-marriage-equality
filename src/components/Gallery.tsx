import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import Canvass from '../index';

export interface Props {
    shifts: Array<Canvass>
}

class Gallery extends Component<Props> {
    render() {
        const { shifts } = this.props
        var items = [];
        
        for (var i = 0; i < shifts.length; i++) {
            items.push(<GalleryItem key={i} shift={shifts[i]} />)
        }
        return (
            <div className="gallery">
                {items}
            </div>
        )
    }
}

export default Gallery