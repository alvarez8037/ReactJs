import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart';
import './App.css';
import NavBar from "./components/NavBar"
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import itemcount from './components/ItemCount';



  const App = () => { 
    const saludo = 'bienvenidos';
  
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer saludo={saludo} />} />
    <Route path='/categoria/:categoriaId' element={<ItemListContainer saludo={saludo} />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
    </>
  );

}

export default App;
