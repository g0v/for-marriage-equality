// tslint:disable-next-line:import-name
import React, { Component, MouseEvent } from 'react';

export enum ButtonType {
  primary,
  secondary,
}

export interface IProps {
  buttonText: string;
  type: ButtonType;
  onClick: any;
}

class Button extends Component<IProps> {
  public render() {
    const { buttonText, type } = this.props;
    let cn = 'btn';
    switch (type) {
      case ButtonType.primary:
        cn += ' btn--primary';
        break;
      case ButtonType.secondary:
        cn += ' btn--secondary';
        break;
      default:
        break;
    }
    return (
      <button className={cn} onClick={this.props.onClick}>
        {buttonText}
      </button>
    );
  }
}

export default Button;
