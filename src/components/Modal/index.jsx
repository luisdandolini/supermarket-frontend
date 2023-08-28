import { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import './index.css';
import Button from '../Button';
import { createItem } from '../../services/request';

export default function Modal({ onClose }) {
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

  return(
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'> 
          <h1>Adicionar um novo item</h1>
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
        <div className='modal-spacer'></div>
        <Button onClick={callAddItem}>
          Adicionar
        </Button>
      </div>
    </div>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};