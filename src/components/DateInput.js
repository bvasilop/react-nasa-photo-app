/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// const date = moment(props.photo.date).format('DD-MM-YYYY');

const DateInput = props => (
  <div className="ui large icon input" style={{ padding: 3 }}>
    <div className="ui label label">Select a Date:</div>
    <DatePicker
      type="date"
      placeholder="click to select date"
      selected={props.date}
      onChange={props.changeDate}
      placeholderText={moment(props.photo.date).format('MMMM Do YYYY')}
      aria-hidden="true"
    />
    <i aria-hidden="true" className="search icon" />
  </div>
);
export default DateInput;
