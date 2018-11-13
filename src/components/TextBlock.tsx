import React, { Component } from 'react';

export interface Props {
    text: string
}

class TextBlock extends Component<Props> {
    render() {
        const { text } = this.props

        return (
            <p className="gallery__item__text-block">
                {text}
            </p>
        )
    }
}

export default TextBlock