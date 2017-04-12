import React from 'react';
import {render} from 'react-dom';
import Root from './root';

render(<Root />, document.getElementById('app'));

// import _ from 'lodash';

// var moment = require('moment');
// console.log(moment().format());

// function determineDate() {
//   import('moment').then(function (moment) {
//     console.log('in determine>', moment().format());
//   }).catch(function (err) {
//     console.log('Failed to load moment', err);
//   });
// }
//
// determineDate();