import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import './index.css';
import Button from '../Button';
import { createItem, updateItem, deleteItem } from '../../services/request';

export default function Modal({ onClose, item }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const callAddItem = async () => {
    if(name.length < 3) {
      alert('Nome tem que ter mais de 3 caracteres');
      return;
    }

    if(quantity < 1) {
      alert('Quantidade não pode ser menor do que 1');
      return;
    }

    const result = await createItem({ name, quantity: parseInt(quantity) })
    if(!result?.error) {
      alert('Item salvo com sucesso!')
      onClose();
    }
  }

  const callUpdateItem = async () => {
    if(name.length < 3) {
      alert('Nome tem que ter mais de 3 caracteres');
      return;
    }

    if(quantity < 1) {
      alert('Quantidade não pode ser menor do que 1');
      return;
    }

    const result = await updateItem(item?._id, { name, quantity: parseInt(quantity), checked: item?.checked })
    if(!result?.error) {
      alert('Item salvo com sucesso!')
      onClose();
    }
  }

  const callDeleteItem = async () => {
    const result = await deleteItem(item?._id);
    if(!result?.error) {
      alert('Item deletado com sucesso!')
      onClose();
    }
  }

  useEffect(() => {
    if(item?.name && item?.quantity) {
      setName(item?.name)
      setQuantity(item?.quantity)
    }
  }, [item])

  return(
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'> 
          <h1>{item ? 'Editar item' : 'Adicionar um novo item'}</h1>
          <button onClick={onClose} className='modal-close-button'/>
        </div>
        <Input 
          label="Nome" 
          placeholder="Ex: Arroz" 
          value={name} 
          onChange={(text) => setName(text)} 
        />
        <Input 
          label="Quantidade" 
          value={quantity} 
          onChange={(text) => setQuantity(text)} 
          type="number"
        />
        <div className='buttons-container'>
          {item && <Button icon variant="outline" onClick={callDeleteItem}>Deletar item</Button>}
          <Button onClick={item ? callUpdateItem : callAddItem}>
            {item ? "Atulizar" : "Adicionar"}
          </Button>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  item: PropTypes.func.isRequired,
};