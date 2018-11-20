// tslint:disable-next-line:import-name
import React, { Component } from 'react';

export interface IProps {
  k: string;
  v: string;
}

class KeyValue extends Component<IProps> {
  public render() {
    const { k, v } = this.props;
    return (
      <div className="stat">
        <label className="stat__label">{k}</label>
        <span className="stat__figure">{v}</span>
      </div>
    );
  }
}

export default KeyValue;
