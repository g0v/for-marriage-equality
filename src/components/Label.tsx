import React, { Component } from 'react';

export interface Props {
    text: string
}

class Label extends Component<Props> {
    render() {
        const { text } = this.props
        var cn = "label"
        switch(text) {
            case "發文宣":
                cn += " label--neutral"
                break;
            case "對話":
                cn += "label--prominent"
                break;
            case "代工":
                cn += "label--muted"
                break;
            case "掃街":
                cn += "label--chill"
                break;
            case "擺攤":
            cn += "label--warm"
            break;

            default:
            break;
        }
        return (
            <div className={cn}>
                {text}
            </div>
        )
    }
}

export default Label