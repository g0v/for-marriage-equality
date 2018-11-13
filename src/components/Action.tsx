import React, { Component } from 'react';

export interface Props {
    type: string
    contact: string
}

class Action extends Component<Props> {
    render() {
        const { type, contact } = this.props
        var cn = "btn"
        var link
        var buttonText
        var title = ""

        switch(type) {
            case "line":
                cn += " btn--line"
                link = `line://ti/p/@${contact}`
                title = `${contact}`
                buttonText = `Line`
                break;
            case "phone":
                cn += " btn--phone"
                buttonText = `打電話`
                title = `${contact}`
                link = `tel://${contact}`
                break;
            default:
            break;
        }
        return (
            <a className={cn} href={link} title={title}>
                {buttonText}
            </a>
        )
    }
}

export default Action