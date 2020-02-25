/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import DateInput from './components/DateInput';
import Photo from './components/Photo';

export default class App extends React.Component {
  state = {
    date: '',
    photo: '',
  };

  componentDidMount() {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=klij40JKvLq3IkKh4F4ZYgtZBM9jhO1VPjPPMwfr`
    )
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

  changeDate = e => {
    e.preventDefault();
    const dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
  };

  render() {
    return (
      <div>
        <h1>NASA'S Astronomy Picture of the Day</h1>
        <DateInput changeDate={this.changeDate} />
        <Photo photo={this.state.photo} />
      </div>
    );
  }
}
