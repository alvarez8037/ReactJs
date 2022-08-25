import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import NavBar from "./components/NavBar"




  const App = () => { 
    const saludo = 'bienvenidos';
  
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo={saludo}/>
    </>
  );

}

export default App;
