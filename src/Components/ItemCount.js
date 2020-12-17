import {useState} from 'react';

function ItemCount({stock, initial, onAdd}) {
    const [qty, setQty] = useState(initial);

    const clickResta = () => {
        if(qty > 1){
            setQty(qty - 1);
        }
    }
    const clickSuma = () => {
        if(qty < stock){
            setQty(qty + 1);
        }
    } 

    return (
        <div>
        <button onClick={clickResta}>-</button>
        <input type="text" value={qty}/>
        <button onClick={clickSuma}>+</button>
        <button onClick={() => onAdd(qty)}>Agregar al carrito</button>
        </div>
    );
  }
  
  export default ItemCount;
  
