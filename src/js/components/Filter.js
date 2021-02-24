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

  const { filters, onFilter, textProperty, valueProperty } = props;

  return(
    <div>
      {filters.map(filter => (
        <span style={style} key={filter[valueProperty]} onClick={ () => onFilter(filter[textProperty])}>{filter[textProperty]}</span>
      ))}
    </div>
  )
}

Filter.propTypes = {

};

export default Filter;