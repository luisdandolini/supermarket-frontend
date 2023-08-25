import { useState, useEffect } from "react";
import ListCard from "./components/ListCard";

const fakeList = [
  {
    id: 0,
    name: 'Arroz',
    quantity: 2,
    checked: true
  },
  {
    id: 1,
    name: 'Feijão',
    quantity: 1,
    checked: false
  },
  {
    id: 2,
    name: 'Macarrão',
    quantity: 5,
    checked: false
  },
]

function App() {
  const [loading, setLoading] = useState(true);
  const [marketList, setMarketList] = useState([]);

  const loadList = () => {
    setLoading(true)
    setTimeout(() => {
      setMarketList(fakeList)
      setLoading(false)
    }, 2000);
  }

  useEffect(() => {
    loadList()
  }, []);

  return (
    <div>
      {
        loading ? <span>Carregando...</span> : marketList.map((item) => (
          <ListCard key={item.id} item={item}/>
        ))
      }
    </div>
  )
}

export default App
