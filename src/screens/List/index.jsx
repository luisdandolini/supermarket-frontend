import { useEffect, useState } from 'react';
import { getList } from '../../services/request';
import Logo from '../../assets/logo.png';
import Loader from '../../components/Loader';
import ListRender from '../../components/ListRender';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import './index.css';

export default function ListScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);

  const loadListItems = async() => {
    setLoading(true);
    const result = await getList();
    setListData(result);
    setLoading(false);
  }

  useEffect(() => {
    loadListItems();
  }, [])

  const onClickAddButton = () => {
    setModalVisible(true);
  }

  const onCloseModal = () => {
    setModalVisible(false);
    loadListItems();
  }

  return(
    <div className='list-screen-container'>
      <div className='list-screen-content-container'>
        <div className='list-screen-header'>
          <div className='list-screen-title-container'>
            <img src={Logo} alt="Logo Supermarketlist" />
            <h1 className='list-screen-header-title'>Lista Supermecado</h1>
          </div>
          <div className='list-screen-header-button-container'>
            <Button onClick={onClickAddButton}>Adicionar</Button>
          </div>
        </div>
        <div className='list-screen-list-container'>
          {
            loading ? <Loader /> : <ListRender list={listData}/>
          }
        </div>
      </div>
      {
        modalVisible && <Modal onClose={onCloseModal} />
      }
    </div>
  )
} 