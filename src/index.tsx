import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'papaparse';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Canvass {
    private notes: string;
    private area: string;
    private name: string;
    private contactInfo: string;
    private volunteersNeeded: number;
    private startTime: string;
    private endTime: string;
    private date: string;
    private type: string;
    private location: string;
    private flyers: number;
    constructor(
        備註: string,
        開團日期: string,
        區域: string,
        團長名稱: string,
        團長聯絡方式: string,
        希望志工人數: number,
        開始時間: string,
        結束時間: string,
        開團形式: string,
        地點: string,
        預計發出文宣份數: number
        ) {
            this.notes = 備註;
            this.area = 區域;
            this.date = 開團日期;
            this.name = 團長名稱;
            this.contactInfo = 團長聯絡方式;
            this.volunteersNeeded = 希望志工人數;
            this.startTime = 開始時間;
            this.endTime = 結束時間;
            this.type = 開團形式;
            this.location = 地點;
            this.flyers = 預計發出文宣份數;
        }
}

const rawData = require('./data/canvass_times.csv');
console.log(rawData);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
