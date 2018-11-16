import React, { Component, MouseEvent } from 'react';

export enum ButtonType {
    primary,
    secondary,
}

export interface Props {
    buttonText: string
    type: ButtonType
    onClick: any
}

class Button extends Component<Props> {
    render() {
        const { buttonText, type } = this.props
        var cn = "btn"
        switch(type) {
            case ButtonType.primary:
                cn += " btn--primary"
                break;
            case ButtonType.secondary:
                cn += " btn--secondary"
                break;
            default:
            break;
        }
        return (
            <button className={cn} onClick={ this.props.onClick }>
                {buttonText}
            </button>
        )
    }
}

export default Button