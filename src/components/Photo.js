import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ photo }) => (
  <div className="ui items">
    <div className="item">
      <img
        src={photo.url}
        alt={photo.title}
        className="ui centered big image"
        style={{ paddingRight: 20 }}
      />
      <div>
        <h3 className="header" style={{ textAlign: 'center' }}>
          {photo.title}
        </h3>
        <p className="description" style={{ padding: 15 }}>
          {photo.explanation}
        </p>
      </div>
    </div>
  </div>
);
Photo.propTypes = {
  photo: PropTypes.object,
};
export default Photo;
