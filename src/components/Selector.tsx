import React, { Component } from 'react';

export interface Props {
    defaultTitle: string;
    title: string;
    options: Array<String>;
    onChange: any; //TODO: Specify type for onChange

}
export default class Selector extends Component<Props> {
    render() {
        return (
            <select className="custom-select custom-select-lg mb-3" value={this.props.title}>
                <option value="" onClick={this.props.onChange}>{this.props.defaultTitle}</option>
                {this.props.options.map((option, index) => {
                    return <option 
                        className="dropdown-item" 
                        key={index+1}
                        onClick={this.props.onChange}
                    >{option}</option>
                })}
            </select>
        );
    }
}