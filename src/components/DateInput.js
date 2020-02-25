import React from 'react';

const DateInput = changeDate => (
  <form onSubmit={changeDate}>
    Enter a date (YYYY-MM-DD):
    <input />
    <input type="submit" />
  </form>
);

export default DateInput;
