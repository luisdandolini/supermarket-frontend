import './index.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ShopBag from '../../assets/shopping-bag.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { SAVE_USERNAME_PATH } from '../../services/constants';

export default function HomeScreen() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const onClickContinue = () => {
    if(username.length < 3) {
      alert('Username deve conter mais do que 3 caracteres!');
      return;
    }

    localStorage.setItem(SAVE_USERNAME_PATH, username);
    navigate('/list');
  }

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
          <Button onClick={onClickContinue}>Continuar</Button>
        </div>
      </div>
    </div>
  )
}