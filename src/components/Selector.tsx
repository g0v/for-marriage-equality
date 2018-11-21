// tslint:disable-next-line:import-name
import React, { Component } from 'react';

export interface IProps {
  defaultTitle: string;
  defaultValue: string;
  title: string;
  options: string[];
  onChange: any; // TODO: Specify type for onChange

}
export default class Selector extends Component<IProps> {
  public render() {
    return (
      <select onChange={this.props.onChange} value={this.props.title} className="custom-select">
        <option disabled>{this.props.defaultTitle}</option>
        {this.props.options.map((option, index) => {
          return <option
            className="dropdown-item"
            key={index + 1}
          >{option}</option>;
        })}
      </select>
    );
  }
}
