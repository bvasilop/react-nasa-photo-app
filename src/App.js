/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import moment from 'moment';
import DateInput from './components/DateInput';
import Photo from './components/Photo';

export default class App extends React.Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
    photo: '',
  };

  componentDidMount() {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=klij40JKvLq3IkKh4F4ZYgtZBM9jhO1VPjPPMwfr`
    )
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

  getPhoto = date => {
    fetch(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=klij40JKvLq3IkKh4F4ZYgtZBM9jhO1VPjPPMwfr`
    )
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  // formatDate = moment => {
  //   moment().format('YYYY-MM-DD');
  //   // const year = moment.year();
  //   // const month = moment.month() + 1;
  //   // const day = moment.date();
  //   // return `${year}-${month}-${day}`;
  // };

  changeDate = dateFromInput => {
    this.setState({ date: dateFromInput });
    this.getPhoto(moment(dateFromInput).format('YYYY-MM-DD'));
  };

  render() {
    return (
      <div>
        <h1>NASA'S Astronomy Picture of the Day</h1>
        <DateInput changeDate={this.changeDate} value={this.dateFromInput} />
        <Photo photo={this.state.photo} date={this.state.date} />
      </div>
    );
  }
}
