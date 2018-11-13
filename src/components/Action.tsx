import React, { Component } from 'react';

export interface Props {
    text: string
    type: string
}

class Action extends Component<Props> {
    render() {
        const { text, type } = this.props
        var cn = "btn"
        switch(type) {
            case "fb":
                cn += " btn--fb"
                break;
            case "line":
                cn += " btn--line"
                break;
            case "phone":
                cn += " btn--phone"
                break;
            default:
            break;
        }
        return (
            <button className={cn}>
                {text}
            </button>
        )
    }
}

export default Action