import PropTypes from 'prop-types';
import ListCard from "../ListCard";
import './index.css';

export default function ListRender({ list, onEdit }) {
  
  if(list?.length === 0) {
    return(
      <h3>
        Sua lista vazia, clique no botão Adicionar para incluir novos itens.
      </h3>
    )
  }

  return(
    <div className='list-render'>
      {
        list.map((item) => <ListCard onClick={onEdit} item={item} key={item?._id} />)
      }
    </div>
  )
}

ListRender.propTypes = {
  list: PropTypes.any.isRequired,
  onEdit: PropTypes.any.isRequired
};