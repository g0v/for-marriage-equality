import React, { Component } from 'react';

export interface Props {
    defaultTitle: string;
    options: Array<String>;
}
export default class Selector extends Component<Props> {
    render() {
        return (
            <div className="dropdown">
                <button 
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                >
                    {this.props.defaultTitle}
    </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {this.props.options.map((option, index) => {
                        return <a className="dropdown-item" href="#" key={index+1}>{option}</a>
                    })}
                </div>
            </div>
        );
    }
}