import './index.css';
import { useState } from 'react';
import ShopBag from '../../assets/shopping-bag.svg'
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function HomeScreen() {
  const [username, setUsername] = useState("");

  return(
    <div className='home-screen-container'>
      <div className='home-screen-content-container'>
        <img src={ShopBag} alt="Shop-Bag" className='shopping-bag-image'/>
        <h1 className='home-screen-title'>Sua lista de supermercado mais fácil do que nunca</h1>
        <h3 className='home-sub-title'>
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </h3>
        <h3 className='home-sub-title-description'>
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </h3>
        <Input 
          label="Username" 
          placeholder="Ex: usuário1" 
          value={username} 
          onChange={(text) => setUsername(text)} 
        />
        <div className='home-screen-form-container'>
          <Button>Continuar</Button>
        </div>
      </div>
    </div>
  )
}