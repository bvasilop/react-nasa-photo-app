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

  changeDate = dateFromInput => {
    this.setState({ date: dateFromInput });
    this.getPhoto(moment(dateFromInput).format('YYYY-MM-DD'));
  };

  render() {
    const { photo, date } = this.state;
    return (
      <div style={{ overflow: 'hidden' }}>
        <div className="ui container" style={{ paddingTop: 5 }}>
          <div className="ui raised segment">
            <h1 className="ui center aligned container">
              NASA'S Astronomy Picture of the Day
            </h1>
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
