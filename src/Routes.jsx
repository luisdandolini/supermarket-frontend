import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/Home';
import ListScreen from './screens/List';

export default function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/list" element={<ListScreen />} />
      </Routes>
    </BrowserRouter>
  )
}