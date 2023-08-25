import './index.css';
import PropTypes from 'prop-types';

export default function ListCard(props) {
  return(
    <div className='list-card-container'>
      <span>{props.item.name}</span>
    </div>
  )
}

ListCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};