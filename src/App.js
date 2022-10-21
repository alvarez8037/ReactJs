import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import Cart from './components/Cart';
import NavBar from "./components/NavBar"
import CartProvider from './context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




  const App = () => { 
    const saludo = 'bienvenidos';
  
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer saludo={saludo} />} />
    <Route path='/categoria/:categoriaId' element={<ItemListContainer saludo={saludo} />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </>
  );

}

export default App;
