import React from 'react';
import PropTypes from 'prop-types';

const Number = ({ text }) => {
  console.log(text)
  return(
  <li className="table__text">
    {text}
  </li>
)}

Number.propTypes = {
  text: PropTypes.string.isRequired
}

export default Number