import './index.css';
import PropTypes from 'prop-types';

export default function Button({ children }) {
  return(
    <button className='button-container'>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired
};