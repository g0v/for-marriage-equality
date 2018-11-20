/* tslint:disable-next-line */
import React, { Component } from 'react';
import Canvass from '../Canvass';

interface IProps {
  shift: Canvass;
}

export default class TableRow extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  // <th scope="col">區域</th>
  // <th scope="col">開團日期</th>
  // <th scope="col">開始時間</th>
  // <th scope="col">結束時間</th>
  // <th scope="col">地點</th>
  // <th scope="col">集合地</th>
  // <th scope="col">希望志工人數</th>
  // <th scope="col">團長名稱</th>
  // <th scope="col">團長聯絡方式</th>
  // <th scope="col">開團形式</th>
  // <th scope="col">預計發出文宣份數</th>
  // <th scope="col">備註</th>
  // TODO: ADD Meeting Point
  public render() {
    return (
      <tr>
        <th scope="col">{this.props.shift.area}</th>
        <th scope="col">{this.props.shift.date}</th>
        <th scope="col">{this.props.shift.startTime}</th>
        <th scope="col">{this.props.shift.endTime}</th>
        <th scope="col">{this.props.shift.location}</th>
        <th scope="col">{this.props.shift.volunteersNeeded}</th>
        <th scope="col">{this.props.shift.name}</th>
        <th scope="col">{this.props.shift.contactInfo}</th>
        {/* <th scope="col">{this.props.shift.type}</th> */}
        <th scope="col">{this.props.shift.flyers}</th>
        <th scope="col">{this.props.shift.notes}</th>
      </tr>
    );
  }
}
