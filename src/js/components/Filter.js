import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {

  const style = {
    display: 'inline-block',
    padding: '8px 16px',
    border: '1px solid #ccc',
    borderRadius : '16px',
    margin: '0 8px'
  };

  const { genres, onFilter, textProperty, valueProperty, activeGenre } = props;

  return(
    <div>
      {genres.map(genre => (
        <span
          className={genre === activeGenre ? 'active' : ''}
          style={style} 
          key={genre[valueProperty]} 
          onClick={ () => onFilter(genre)}>{genre[textProperty]}
        </span>
      ))}
    </div>
  )
}

Filter.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired
};

export default Filter;