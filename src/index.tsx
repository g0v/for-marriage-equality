import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetSheetDone from 'get-sheet-done';

import 'react-datepicker/dist/react-datepicker.css';

import './index.scss';

// import G0vbar from 'g0v-banner';

import App from './App';
import Canvass from './Canvass';

const googleSheet: string = "1i3Y4VTelUNFySPXMys6rLlN3wZlC9T_vLKR1X-9rnmY";
const sheetNum: number = 2;

GetSheetDone.labeledCols(googleSheet, sheetNum).then((sheet:any) => {
    const rawData = sheet.data;
    const shifts: Canvass[]= rawData.map((a: any) => new Canvass(a));

    ReactDOM.render(<App shifts={shifts} />, document.getElementById('root'));
});
