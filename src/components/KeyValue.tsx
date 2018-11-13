import React, { Component } from 'react';

export interface Props {
    k: string;
    v: string;
}

class KeyValue extends Component<Props> {
    render() {
        const { k, v } = this.props
        return (
            <div className="stat">
                <label className="stat__label">{k}</label>
                <span className="stat__figure">{v}</span>
            </div>
        )
    }
}

export default KeyValue