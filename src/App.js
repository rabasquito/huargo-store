
import './App.css';
import  NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar titulo="Huargo Store" />
      <ItemListContainer greeting="Item List Container" />
    </>
  );
}

export default App;
