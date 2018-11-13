import React, { Component } from 'react';
import Canvass from './canvass';
import TableRow from './tablerow';

type Props = {
    shifts: Array<Canvass>
}

export default class Table extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        console.log("Table received: ", this.props.shifts)
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">區域</th>
                        <th scope="col">開團日期</th>
                        <th scope="col">開始時間</th>
                        <th scope="col">結束時間</th>
                        <th scope="col">地點</th>
                        <th scope="col">希望志工人數</th>
                        <th scope="col">團長名稱</th>
                        <th scope="col">團長聯絡方式</th>
                        <th scope="col">開團形式</th>
                        <th scope="col">預計發出文宣份數</th>
                        <th scope="col">備註</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.shifts.map(a => {return <TableRow shift={a} /> })}
                </tbody>
            </table>

        );
    }
}

