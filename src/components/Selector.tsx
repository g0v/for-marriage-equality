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
            <select onChange={this.props.onChange} value={this.props.title} className="custom-select">
                <option selected disabled>{this.props.defaultTitle}</option>
                {this.props.options.map((option, index) => {
                    return <option 
                        className="dropdown-item" 
                        key={index+1}
                    >{option}</option>
                })}
            </select>
        );
    }
}