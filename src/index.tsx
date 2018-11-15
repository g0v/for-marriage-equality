import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import "react-datepicker/dist/react-datepicker.css";

// import G0vbar from 'g0v-banner';

import App from './App';
import Canvass from './canvass';
import * as serviceWorker from './serviceWorker';
import GetSheetDone from 'get-sheet-done';

GetSheetDone.labeledCols("1Fc0BbQW6GWIlOtK5woKI-6zCjQ_V874KUzo8gcFUdnY").then((sheet:any) => {
    var rawData = sheet.data
    const shifts: Array<Canvass> = rawData.map((a: any) => { return new Canvass(a) });

    console.log("Created these shifts.", shifts);

    ReactDOM.render(<App shifts={shifts} />, document.getElementById('root'));

})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
