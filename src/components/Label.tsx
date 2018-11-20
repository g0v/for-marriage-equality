// tslint:disable-next-line:import-name
import React, { Component } from 'react';

export interface IProps {
  text: string;
}

class Label extends Component<IProps> {
  public render() {
    const { text } = this.props;
    let cn = 'label';
    switch (text) {
      case '發文宣':
        cn += ' label--neutral';
        break;
      case '對話':
        cn += ' label--prominent';
        break;
      case '代工':
        cn += ' label--muted';
        break;
      case '掃街':
        cn += ' label--chill';
        break;
      case '擺攤':
        cn += ' label--warm';
        break;

      default:
        cn += ' label--distance';
        break;
    }
    return (
      <div className={cn}>
        {text}
      </div>
    );
  }
}

export default Label;
