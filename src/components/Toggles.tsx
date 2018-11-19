import React, { Component } from "react";

export interface Props {
  options: Array<string>;
  selected: string;
  onChange: any;
}

const Toggles: React.FunctionComponent<Props> = (props) => {
    const displayOptions = props.options.map((opt: string, i: number) => {
        const labelClasses = opt===props.selected ? "toggle btn btn-secondary active" : "toggle btn btn-secondary";
        return (
        <label 
          className={labelClasses} 
          key={i.toString()}
          onClick={() => props.onChange(opt)}
        >
            <input 
              type="radio" 
              name="options" 
              key={i.toString()} 
            />
            {opt}
        </label>
      );
    });
    return (
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        {displayOptions}
      </div>
    );
};

export default Toggles;