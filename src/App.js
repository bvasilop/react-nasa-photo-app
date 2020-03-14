import React from 'react';
import moment from 'moment';
import DarkModeToggle from './DarkModeToggle';
import DateInput from './components/DateInput';
import Photo from './components/Photo';
import './styles/App.css';
import './styles/styles.scss';

export default class App extends React.Component {
  state = {
    date: moment(),
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

  changeDate = dateFromInput => {
    this.setState({ date: dateFromInput });
    this.getPhoto(moment(dateFromInput).format('YYYY-MM-DD'));
  };

  render() {
    const { photo, date } = this.state;
    return (
      <div>
        <div className="navbar-container">
          <div className="navbar">
            <DarkModeToggle />
          </div>
        </div>
        <br />
        <div className="ui container">
          <div className="ui raised segment">
            <h1>NASA Astronomy Picture of the Day</h1>
            <DateInput
              photo={photo}
              changeDate={this.changeDate}
              value={this.dateFromInput}
            />
            <Photo photo={photo} date={date} />
          </div>
        </div>
      </div>
    );
  }
}
