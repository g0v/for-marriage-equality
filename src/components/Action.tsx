import React, { Component } from 'react';
// import { CopyToClipboard } from 'react-copy-to-clipboard';

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
        if (type == "line") {
            return (
                // <CopyToClipboard text={`@${contact}`}
                // onCopy={() => alert(`已將 LineID @${contact} 複製。`)}>
                <button className={cn} title={title}>{buttonText}</button>
                // </CopyToClipboard>
            )
        } else {
            return (
                <a className={cn} title={title} href={link}>
                    {buttonText}
                </a>    
            )
        }
    }
}

export default Action