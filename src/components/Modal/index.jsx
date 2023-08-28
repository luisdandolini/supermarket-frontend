import { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import './index.css';
import Button from '../Button';

export default function Modal({ onClose }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

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
        <Button>
          Adicionar
        </Button>
      </div>
    </div>
  )
}

Modal.propTypes = {
  onClose: PropTypes.any.isRequired,
};