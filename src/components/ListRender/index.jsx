import PropTypes from 'prop-types';
import ListCard from "../ListCard";

export default function ListRender({ list }) {
  
  if(list?.length === 0) {
    return(
      <h3>
        Sua lista vazia, clique no botão Adicionar para incluir novos itens.
      </h3>
    )
  }

  return(
    <div>
      {
        list.map((item) => <ListCard item={item} key={item?._id} />)
      }
    </div>
  )
}

ListRender.propTypes = {
  list: PropTypes.any.isRequired,
};