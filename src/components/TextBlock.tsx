// tslint:disable-next-line:import-name
import React, { Component } from 'react';

export interface IProps {
  text: string;
  italic?: boolean;
}

class TextBlock extends Component<IProps> {
  public render() {
    const { text } = this.props;

    return (
      <p className={`gallery__item__text-block grow + ${(this.props.italic ? ' italic' : '')}`}>
        {text}
      </p>
    );
  }
}

export default TextBlock;
