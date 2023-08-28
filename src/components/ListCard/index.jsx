import './index.css';
import PropTypes from 'prop-types';
import Checked from "../../assets/checked.svg";
import UnChecked from "../../assets/unchecked.svg";

export default function ListCard(props) {
  const { item } = props;

  return(
    <div className='list-card-container'>
      <img className='checkbox' src={`${item?.checked ? Checked : UnChecked}`} alt="checked-item" />
      <div className='list-container-quantity'>
        <span>{props.item.name}</span>
        <span className='text-quantity'>{props.item.quantity} unidades</span>
      </div>
    </div>
  )
}

ListCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    quantity: PropTypes.any.isRequired
  }).isRequired
};