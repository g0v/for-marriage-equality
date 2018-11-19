import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.scss';
import "react-datepicker/dist/react-datepicker.css";

// import G0vbar from 'g0v-banner';

import App from './App';
import Canvass from './canvass';
import * as serviceWorker from './serviceWorker';
import GetSheetDone from 'get-sheet-done';

const googleSheet: string = "1i3Y4VTelUNFySPXMys6rLlN3wZlC9T_vLKR1X-9rnmY";
const sheetNum: number = 2;

GetSheetDone.labeledCols(googleSheet, sheetNum).then((sheet:any) => {
    console.log("Got: ", sheet);
    const rawData = sheet.data;
    const shifts: Array<Canvass> = rawData.map((a: any) => { return new Canvass(a) });

    console.log("Created these shifts.", shifts);
    ReactDOM.render(<App shifts={shifts} />, document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
