// tslint:disable-next-line:import-name
import React, { Component } from 'react';

export interface IProps {
  options: string[];
  selected: string;
  onChange: any;
}

// tslint:disable-next-line:variable-name
const Toggles: React.FunctionComponent<IProps> = (props) => {
  const displayOptions = props.options.map((opt: string, i: number) => {
    const inactiveClasses = 'toggle btn btn-secondary';
    const activeClasses = `${inactiveClasses} active`;
    const labelClasses = opt === props.selected ? activeClasses : inactiveClasses;
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
