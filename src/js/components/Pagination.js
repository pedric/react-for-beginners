import React, { useLayoutEffect } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = (props) => {

  const liStyle = {
    display: 'inline-block',
    border: '1px solid #ccc',
    cursor: 'pointer'
  };
  const aStyle = {
    display: 'block',
    padding: '8px'
  };

  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil( itemsCount / pageSize );
  if(pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  const nav = pages.map( (page, index) => (
    <li key={`pagination_${page}_${index}`} style={liStyle} className={page === currentPage ? 'active':''}>
      <a onClick={() => onPageChange(page)} style={aStyle}>{page}</a>
    </li>
  ));

  return (
      <nav>
        <ul>
          {nav}
        </ul>
      </nav>
    );
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired, 
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
 
export default Pagination;