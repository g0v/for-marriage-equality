import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Papa from 'papaparse';

import './index.css';
import App from './App';
import Canvass from './canvass';
import * as serviceWorker from './serviceWorker';

const text: string = require('./data/canvass_times.csv');
const rawData: any = Papa.parse(text, {          
    dynamicTyping: true,
    header: true,
    skipEmptyLines: true
})['data'].filter(removeEmpty);

function removeEmpty(a: any): boolean {
    return a["區域"]!==null;
}

const shifts: Array<Canvass> = rawData.map((a: any) => { return new Canvass(a) });

console.log("Created these shifts.", shifts);

ReactDOM.render(<App shifts={shifts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
