/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Photo = props => (
  <div className="ui items">
    <div className="item">
      <img
        src={props.photo.url}
        alt={props.photo.title}
        className="ui centered big image"
        style={{ paddingRight: 20 }}
      />
      <div>
        <h3 className="header" style={{ textAlign: 'center' }}>
          {props.photo.title}
        </h3>
        <p className="description" style={{ padding: 15 }}>
          {props.photo.explanation}
        </p>
      </div>
    </div>
  </div>
);
export default Photo;
