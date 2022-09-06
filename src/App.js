import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import NavBar from "./components/NavBar"
import ItemDetailContainer from './components/ItemDetailContainer';




  const App = () => { 
    const saludo = 'bienvenidos';
  
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo={saludo}/>
    <ItemDetailContainer/>
    </>
  );

}

export default App;
