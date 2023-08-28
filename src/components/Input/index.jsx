import './index.css';
import PropTypes from 'prop-types';

export default function Input({ label, placeholder, value, onChange, type }) {
  return(
    <div className='input-container'>
      <span className='input-label'>{label}</span>
      <input 
        className='input' 
        placeholder={placeholder} 
        value={value} onChange={(e) => onChange(e.target.value)} 
        type={type || 'text'}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired, 
  type: PropTypes.string.isRequired,   
};
