import { FaShoppingCart } from 'react-icons/fa';
import { IconContext } from "react-icons";
import'./CartWidget.css';

function CartWidget() {
    return (
        <IconContext.Provider value={{ color: "white"}}>
            <div>
                <FaShoppingCart />
                <span>0</span>;
            </div>
        </IconContext.Provider>
    );
  }
  
  export default CartWidget;
  