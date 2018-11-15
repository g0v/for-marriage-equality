import React, { Component } from 'react';

export interface Props {
    text: string
    italic?: boolean
}

class TextBlock extends Component<Props> {
    render() {
        const { text } = this.props

        return (
            <p className={"gallery__item__text-block grow" + (this.props.italic ? " italic" : "")} >
                {text}
            </p>
        )
    }
}

export default TextBlock