import React from 'react';
import Button from './Button';


const Header = ({ title }) => {
  
  const onClick = () => {
    alert('click')
  }
  
  return (
    <header className='header d-flex justify-content-between mt-4 mb-4'>
      <h1>{title}</h1>  
      
    </header>
  );
};

Header.defaultProps = { // will be replaced if i pass arguments
  title: 'Task Tracker'
}

// Header.propType = {
//   title: PropTypes.string.isRequired, // type of props
// }


// css in js
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black' // put this is style={}
// }

export default Header;