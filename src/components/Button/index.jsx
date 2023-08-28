import './index.css';
import PropTypes from 'prop-types';
import Trash from '../../assets/trash.svg';

export default function Button({ children, onClick, variant, icon }) {
  return(
    <button onClick={onClick} className={`button-container ${variant === 'outline' ? 'outline' : 'main'}`}>
      {
        icon && <img src={Trash} className='button-icon' />
      }
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.any.isRequired,
  variant: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};