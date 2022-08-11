import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return <button onClick={onClick} style={{ backgroundColor: color, fontWeight: 700 }} className='btn bg-white'>{text}</button>
};

Button.defaultProps = {
  color: 'black',
  text: 'Add'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;