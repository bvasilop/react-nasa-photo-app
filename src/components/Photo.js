import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ photo }) => (
  <div className="ui items">
    <div className="item">
      <img
        src={photo.url}
        alt={photo.title}
        className="ui centered big image"
        //
      />
      <div>
        <h2 className="header">{photo.title}</h2>
        <p className="description">{photo.explanation}</p>
      </div>
    </div>
  </div>
);
Photo.propTypes = {
  photo: PropTypes.object,
};
export default Photo;
