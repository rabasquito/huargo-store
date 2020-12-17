
import './App.css';
import  NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import  ItemCount from './Components/ItemCount';

function App() {
  return (
    <>
      <NavBar titulo="Huargo Store" />
      <ItemListContainer greeting="Item List Container" />
      <ItemCount stock={5} initial={1} onAdd={(qty) => alert(`Agregaste ${qty} productos`)}/>
      <ItemCount stock={7} initial={2} onAdd={(qty) => alert(`Agregaste ${qty} productos`)}/>
      <ItemCount stock={3} initial={3} onAdd={(qty) => alert(`Agregaste ${qty} productos`)}/>

    </>
  );
}

export default App;
