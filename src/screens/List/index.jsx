import { useEffect, useState } from 'react';
import { getList } from '../../services/request';
import Logo from '../../assets/logo.png';
import ListCard from '../../components/ListCard';
import './index.css';

export default function ListScreen() {
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

  return(
    <div className='list-screen-container'>
      <div className='list-screen-content-container'>
        <div className='list-screen-header'>
          <img src={Logo} alt="Logo Supermarketlist" />
          <h1>Lista Supermecado</h1>
        </div>
        <div className='list-screen-list-container'>
          {loading && <h3>Carregando...</h3>}
          {
            !loading && listData?.length > 0 ? listData.map(item => <ListCard key={item._id} item={item} />) : <h3>Lista vazia</h3>
          }
        </div>
      </div>
    </div>
  )
} 