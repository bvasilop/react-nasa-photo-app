import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({ date, changeDate, photo }) => (
  <div className="input-container">
    <div className="ui large icon input">
      <div className="ui label label">Select a Date:</div>
      <DatePicker
        type="button"
        selected={date}
        onChange={changeDate}
        placeholderText={moment(photo.date).format('MMMM Do, YYYY')}
        aria-hidden="true"
      />
      <i aria-hidden="true" className="search icon" />
    </div>
  </div>
);

DateInput.propTypes = {
  date: PropTypes.number,
  changeDate: PropTypes.func,
  photo: PropTypes.object,
};
export default DateInput;
