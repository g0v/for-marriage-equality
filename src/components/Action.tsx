import React, { Component } from 'react';

export interface Props {
    type: string
    contact: string
}

class Action extends Component<Props> {
    render() {
        const { type, contact } = this.props
        var cn = "btn"
        var link;
        var buttonText;
        switch(type) {
            case "line":
                cn += " btn--line"
                link = `line://ti/p/@${contact}`
                // buttonText = `Line @${contact}`
                buttonText = `Line`
                break;
            case "phone":
                cn += " btn--phone"
                buttonText = `打電話`
                link = `tel://${contact}`
                break;
            default:
            break;
        }
        return (
            <a className={cn} href={link}>
                {buttonText}
            </a>
        )
    }
}

export default Action