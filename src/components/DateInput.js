import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({ date, changeDate, photo }) => (
  <div className="ui large icon input" style={{ padding: 7 }}>
    <div className="ui label label">Select a Date:</div>
    <DatePicker
      type="date"
      selected={date}
      onChange={changeDate}
      placeholderText={moment(photo.date).format('MMMM Do, YYYY')}
      aria-hidden="true"
    />
    <i aria-hidden="true" className="search icon" />
  </div>
);

DateInput.propTypes = {
  date: PropTypes.number,
  changeDate: PropTypes.func,
  photo: PropTypes.object,
};
export default DateInput;
