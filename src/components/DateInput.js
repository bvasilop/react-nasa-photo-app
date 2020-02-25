/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = props => (
  <div>
    Select a Date:
    <DatePicker
      selected={props.date}
      onChange={props.changeDate}
      placeholderText="Click to select a date"
    />
  </div>
);
export default DateInput;
